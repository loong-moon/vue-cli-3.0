// 根据设备像素比动态改变viewport缩放比及文档根节点字体大小 适用于基于pc的pc、mobile、pad三端适配
const ua = window.navigator.userAgent.toLowerCase()
const viewport = document.querySelector('meta[name=viewport]')
const docEl = document.documentElement
const dpr = window.devicePixelRatio
const scale = 1 / dpr

if (ua.indexOf('android') !== -1 && parseFloat(ua.slice(ua.indexOf('android') + 8)) < 4.4) {
    // 低于4.4版本的安卓设备
    viewport.content = 'width=device-width, initial-scale=1, user-scalable=no'
} else {
    // 放小后再扩大是为了css中1px不变，可以和设计图的大小严格对应
    viewport.content = 'width=device-width, initial-scale = ' + scale +
        ', minimum-scale = ' + scale +
        ', maximum-scale = ' + scale +
        ', user-scalable=no'

    docEl.style.fontSize = 100 * dpr + 'px'
    docEl.dataset.dpr = dpr
}
