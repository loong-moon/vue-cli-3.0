const LONG_INTERVAL = 30 * 1000
const SHORT_INTERVAL = 500
const BATCHLENGTH = 1000
let isBatchReporting = false // 是否正在批量上报
let queue = {
    stack: [],
    status: 'completed',
    async next() {
        this.status = 'pending'
        const task = this.stack.shift()
        await task.handler(task.data)
        if (!this.stack.length) return (this.status = 'completed')
        this.next()
    }
}

class Stat {
    constructor({
        report = data => data,
        router = null,
        onceNodeView = true,
        showConsole = false
    } = {}) {
        this.onceNodeView = onceNodeView
        this.showConsole = showConsole
        this.report = report
        this.router = router

        // 页面浏览历史记录
        this.pageHistory = []

        this.clickCbs = new Map()
        this.nodeList = new Map()

        this.init()
    }
}

// 点击事件上报
Stat.prototype.bindNode = function(el, binding) {
    // 是否统计node浏览
    if (binding.value.viewId) {
        this.nodeList.set(el, binding.value)
    }
    this.clickCbs.set(el, e => this.clickReport(binding.value))
    el.addEventListener('click', this.clickCbs.get(el).bind(this))
}

// 解绑
Stat.prototype.unbind = function(el) {
    this.nodeList.delete(el)
    el.removeEventListener('click', this.clickCbs.get(el).bind(this))
}

// 点击事件上报
Stat.prototype.clickReport = function(params) {
    const immediately =
        typeof params.immediately === 'boolean' ? params.immediately : true
    params.id = params.id || params.clickId
    const data = this.initReportData({ type: 'click', ...params })
    if (this.showConsole) console.log('click', data)
    if (immediately) {
        this.immediateReport(data)
    } else {
        this.lazyReport(data)
    }
}

// 浏览事件上报
Stat.prototype.viewReport = async function(params) {
    const immediately =
        typeof params.immediately === 'boolean' ? params.immediately : true
    params.id = params.id || params.viewId
    const data = this.initReportData({ type: 'view', ...params })
    if (this.showConsole) console.log('view', data)
    if (immediately) {
        this.immediateReport(data)
    } else {
        this.lazyReport(data)
    }
}

// 自定义事件上报
Stat.prototype.customReport = function(params) {
    const immediately =
        typeof params.immediately === 'boolean' ? params.immediately : true
    const data = this.initReportData({ ...params })
    if (this.showConsole) console.log(data)
    if (immediately) {
        this.immediateReport(data)
    } else {
        this.lazyReport(data)
    }
}

// 批量上报
Stat.prototype.lazyReport = async function(data) {
    this.recycle(data)
    const now = Date.now()
    let last_stat_ts = localStorage.getItem('last_stat_ts')
    let logs = JSON.parse(localStorage.getItem('stat_data')) || []
    if (
        (!last_stat_ts || now - last_stat_ts >= LONG_INTERVAL) &&
        logs.length &&
        !isBatchReporting
    ) {
        isBatchReporting = true
        logs = slice(logs, BATCHLENGTH)
        localStorage.setItem('stat_data', JSON.stringify([]))
        for(const log of logs) {
            const handler = this._report.bind(this)
            if (!queue.stack.length && queue.status === 'completed') {
                queue.stack.push({ data: log, handler })
                queue.next()
            } else {
                queue.stack.push({ data: log, handler })
            }
        }
        isBatchReporting = false
    }
}

// 错误回收
Stat.prototype.recycle = function(data) {
    let errors = JSON.parse(localStorage.getItem('stat_data')) || []
    if (Array.isArray(data)) errors = [...errors, ...data]
    else if (Object.prototype.toString.call(data) === '[object Object]')
        errors.push(data)
    else return
    localStorage.setItem('stat_data', JSON.stringify(errors))
}

// 即时上传
Stat.prototype.immediateReport = async function(data) {
    const now = Date.now()
    let last_recycle_ts = localStorage.getItem('last_recycle_ts')
    let logs = JSON.parse(localStorage.getItem('stat_data')) || []
    if (
        last_recycle_ts &&
        now - last_recycle_ts >= LONG_INTERVAL &&
        logs.length &&
        !isBatchReporting
    ) {
        isBatchReporting = true
        logs.push(data)
        logs = slice(logs, BATCHLENGTH)
        localStorage.setItem('stat_data', JSON.stringify([]))
        for(const log of logs) {
            const handler = this._report.bind(this)
            if (!queue.stack.length && queue.status === 'completed') {
                queue.stack.push({ data: log, handler })
                queue.next()
            } else {
                queue.stack.push({ data: log, handler })
            }
        }
        isBatchReporting = false
    } else {
        const handler = this._report.bind(this)
        if (!queue.stack.length && queue.status === 'completed') {
            queue.stack.push({ data, handler })
            queue.next()
        } else {
            queue.stack.push({ data, handler })
        }
    }
}

Stat.prototype._report = async function(data) {
    const succeed = await this.report(data)
    if (typeof succeed !== 'boolean') return
    if (!succeed) {
        localStorage.setItem('last_recycle_ts', Date.now())
        this.recycle(data)
    } else {
        localStorage.setItem('last_stat_ts', Date.now())
    }
}
Stat.prototype.clearStorage = async function() {
    let logs = JSON.parse(localStorage.getItem('stat_data')) || []
    if(!logs.length) return
    logs = slice(logs,BATCHLENGTH)
    for (const log of logs) {
        await this.report(log)
    }
    localStorage.removeItem('stat_data')
}
function slice(array=[], piece=BATCHLENGTH) {
    const result = []
     do {
        const pieceArray = array.splice(0, piece)
        result.push(pieceArray)
    } while (array.length > 0)
    return result
}

// 计算节点是否可以上报
Stat.prototype.nodeReport = function() {
    for (let [el, params] of this.nodeList.entries()) {
        const { left, top } = el.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = el

        if (
            // 在窗口内
            left >= 0 - offsetWidth / 3 &&
            left <= innerWidth - offsetWidth / 3 &&
            top >= 0 - offsetHeight / 3 &&
            top <= innerHeight - offsetHeight / 3
        ) {
            this.viewReport(params)
            if (this.onceNodeView) this.nodeList.delete(el)
        }
    }
}

// 页面显示与隐藏事件上报
Stat.prototype.init = function() {
    // console.log(currentPath,this.router,this.router.options.routes)
    this.router.afterEach((to, from) => {
        // 第一个页面加入页面历史记录
        this.pageHistory.push(to.fullPath)

        // 页面是否自动统计
        if (to.meta.autoReport !== false && to.meta.pageName) {
            this.viewReport({
                id: '10002',
                args: {
                    screen: to.meta.pageName,
                    visible: 1
                }
            })
        }
        if (from.meta.autoReport !== false && from.meta.pageName) {
            this.viewReport({
                type: 'hide',
                id: '10002',
                args: {
                    screen: from.meta.pageName,
                    visible: 0
                }
            })
        }
    })

    // 页面滚动时检查节点是否可以上报
    let timer
    window.addEventListener('scroll', e => {
        clearTimeout(timer)
        timer = setTimeout(this.nodeReport.bind(this), 500)
    })
}

// 初始化上报数据
Stat.prototype.initReportData = function({
    type = 'view',
    target = '页面',
    page = this.router.currentRoute.fullPath,
    pageFrom = this.pageHistory[this.pageHistory.length - 2],
    pageParams = { ...this.router.currentRoute.query },
    args = {},
    id
} = {}) {
    return {
        // type,
        // target,
        // page,
        // pageFrom,
        // pageParams,
        args,
        ts: Date.now(),
        id
    }
}

export default Stat
