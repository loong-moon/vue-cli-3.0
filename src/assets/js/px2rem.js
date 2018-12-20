'use strict'

var postcss = require('postcss')

// excluding regex trick: http://www.rexegg.com/regex-best-trick.html
// 双引号中没有内容
// 单引号内没有内容
// url()中没有内容不够
// 后面有px的数字
// !singlequotes|!doublequotes|!url()|pixelunit
var pxRegex = /"[^"]+"|'[^']+'|url\([^\u0029]+\)|(\d*\.?\d+)px/ig

var defaults = {
    rootValue: 100, // 用于计算的根字体大小
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    convertUnit: 'rem', // 转换成的单位
    selectorBlackList: ['.ignore'], // 忽略的选择器
    propList: [], // 忽略的属性
    mediaQuery: false, // // 是否允许在媒体查询中条件中转换`px`
}

module.exports = postcss.plugin('postcss-px-to-rem', function (options) {

    var opts = Object.assign({}, defaults, options)
    var pxReplace = createPxReplace(opts.rootValue, opts.minPixelValue, opts.convertUnit)

    return function (css) {

        css.walkDecls(function (decl, i) {
            // This should be the fastest test and will remove most declarations
            if (decl.value.indexOf('px') === -1) return

            if (blacklistedSelector(opts.selectorBlackList, decl.prop)) return

            if (blacklistedSelector(opts.selectorBlackList, decl.parent.selector)) return

            decl.value = decl.value.replace(pxRegex, pxReplace)
        })

        if (opts.mediaQuery) {
            css.walkAtRules('media', function (rule) {
                if (rule.params.indexOf('px') === -1) return
                rule.params = rule.params.replace(pxRegex, pxReplace)
            })
        }

    }
})

function createPxReplace (rootValue, minPixelValue, convertUnit) {
    return function (m, $1) {
        if (!$1) return m

        let str = m
        let pixels = parseFloat($1)
        if (pixels > minPixelValue) {
            str = pixels / rootValue + convertUnit
        }

        return str
    }
}

function blacklistedSelector (blacklist, selector) {
    if (typeof selector !== 'string') return
    return blacklist.some(function (regex) {
        if (typeof regex === 'string') return selector.indexOf(regex) !== -1
        return selector.match(regex)
    })
}
