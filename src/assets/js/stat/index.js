import Stat from './core'

export default {
    instance: {},
    install(Vue, {
        report = data => data,
        router,
        onceNodeView = true,
        showConsole = false
    } = {}) {
        const stat = new Stat({
            report,
            router,
            onceNodeView,
            showConsole
        })
        this.instance = stat

        Vue.prototype.$nodeReport = stat.nodeReport.bind(stat)
        Vue.prototype.$clickReport = stat.clickReport.bind(stat)
        Vue.prototype.$viewReport = stat.viewReport.bind(stat)
        Vue.prototype.$report = stat.customReport.bind(stat)
        Vue.prototype.$clearStatStorage = stat.clearStorage.bind(stat)

        Vue.directive('stat', {
            inserted: (el,binding) => stat.bindNode(el,binding),
            componentUpdated: (el,binding) => stat.unbind(el) && stat.bindNode(el,binding),
            unbind: (el) => stat.unbind(el)
        })
    }
}
