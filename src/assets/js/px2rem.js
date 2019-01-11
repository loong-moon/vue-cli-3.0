'use strict'

const postcss = require('postcss')

// excluding regex trick: http://www.rexegg.com/regex-best-trick.html
// 双引号中没有内容
// 单引号内没有内容
// url()中没有内容不够
// 后面有px的数字
// !singlequotes|!doublequotes|!url()|pixelunit
const pxRegex = /"[^"]+"|'[^']+'|url\([^\u0029]+\)|(\d*\.?\d+)px/ig

const defaults = {
    rootValue: 100, // 用于计算的根字体大小
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    convertUnit: 'rem', // 转换成的单位
    unitPrecision: 3, // 转换单位的精度
    selectorBlackList: ['.ignore'], // 忽略的选择器
    propBlackList: [], // 忽略的属性
    mediaQuery: false, // // 是否允许在媒体查询中条件中转换`px`
}

module.exports = postcss.plugin('postcss-px-to-rem', function (options) {

    const opts = Object.assign({}, defaults, options)
    const pxReplace = createPxReplace(opts.rootValue, opts.minPixelValue, opts.unitPrecision, opts.convertUnit)

    return function (root) {
        root.walkDecls(function (decl, i) {
            // This should be the fastest test and will remove most declarations
            if (decl.value.indexOf('px') === -1) return

            if (blacklisted(opts.propBlackList, decl.prop)) return

            if (blacklisted(opts.selectorBlackList, decl.parent.selector)) return

            decl.value = decl.value.replace(pxRegex, pxReplace)
        })

        if (opts.mediaQuery) {
            root.walkAtRules('media', function (rule) {
                if (rule.params.indexOf('px') === -1) return
                rule.params = rule.params.replace(pxRegex, pxReplace)
            })
        }

    }
})

function createPxReplace (rootValue, minPixelValue, unitPrecision, convertUnit) {
    return function (m, $1) {
        if (!$1) return m

        let str = m
        let pixels = parseFloat($1)
        if (pixels > minPixelValue) {
            str = toFixed(pixels / rootValue, unitPrecision) + convertUnit
        }

        return str
    }
}

function toFixed (number, precision) {
    const multiplier = Math.pow(10, precision + 1)
    const wholeNumber = Math.floor(number * multiplier)

    return Math.round(wholeNumber / 10) * 10 / multiplier
}

function blacklisted (blacklist, name) {
    if (typeof name !== 'string') return
    return blacklist.some(function (regex) {
        if (typeof regex === 'string') return name.indexOf(regex) !== -1
        return name.match(regex)
    })
}
