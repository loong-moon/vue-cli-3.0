module.exports = {
    "plugins": [
        require('autoprefixer')({}),
        require('./src/assets/js/px2rem')({
            rootValue: 100, // 用于计算的根字体大小
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            convertUnit: 'rem', // 转换成的单位
            selectorBlackList: ['.ignore', '.hairlines'], // 忽略的选择器,可以为正则表达式
            propBlackList: [], // 忽略的属性
            mediaQuery: false, // // 是否允许在媒体查询中条件中转换`px`
        })
    ]
}
