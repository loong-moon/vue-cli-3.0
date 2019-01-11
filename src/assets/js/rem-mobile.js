// 根据设备像素比动态改变viewport缩放比，依据宽度改变根字节大小，适用于移动端适配
const ua = window.navigator.userAgent.toLowerCase()
const viewport = document.querySelector('meta[name=viewport]')
const docEl = document.documentElement
const dpr = window.devicePixelRatio
const scale = 1 / dpr
const baseWidth = 750

if (ua.indexOf('android') !== -1 && parseFloat(ua.slice(ua.indexOf('android') + 8)) < 4.4) {
    // 低于4.4版本的安卓设备
    viewport.content = 'width=device-width, initial-scale=1, user-scalable=no'
} else {
    // 放小后再扩大是为了css中1px不变，可以和设计图的大小严格对应
    viewport.content = 'width=device-width, initial-scale = ' + scale +
        ', minimum-scale = ' + scale +
        ', maximum-scale = ' + scale +
        ', user-scalable=no'

    docEl.dataset.dpr = dpr

    refreshRem()
}

function refreshRem () {
    let width = docEl.getBoundingClientRect().width

    // if (width / dpr > 540) {
    //     width = 540 * dpr
    // }
     // console.log(docEl.getBoundingClientRect().width, width)

    let rem = 100 * width / baseWidth
    docEl.style.fontSize = rem + 'px'
}

