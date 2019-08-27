## 不同适配方案的适用情况及用法

### px2rem
postcss插件，用来将项目中符合条件的px单位转换为rem，在postcssrc.js中下可以设置下面的属性
```
    rootValue: 100, // 用于计算的根字体大小
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
    convertUnit: 'rem', // 转换成的单位
    unitPrecision: 3, // 转换单位的小数点位数
    selectorBlackList: ['.ignore'], // 忽略的选择器
    propBlackList: ['font-size'], // 忽略的属性
    mediaQuery: false, // // 是否允许在媒体查询中条件中转换`px`
```

### rem-mobile
在main中引用rem-mobile.js  
以750的屏宽为基准，计算出相对的根字体大小  
并设置相应的viewport值，使css中1px值和屏幕中的1px值严格对应  
可以和px2rem配合使用，在开发时直接写px值而不用计算  

### viewport
在main中引用viewport.js  
基于设备像素比来计算根字体大小，适用于基于pc的pc、mobile、pad三端适配  
可以和px2rem配合使用，在开发时直接写px值而不用计算  
和rem-mobile的区别是没有考虑移动端真实的放大比例，而直接以设备像素比来决定，好处是在pc端不会放大  

### flexible
在main中引用flexible.js  
依据视觉搞的不同标准比如640,750，将px2rem的rootValue值设置为不同的值比如64,75  
和rem-mobile很相似，不过是为了和vw和vh一一对应，实际上不用这个插件直接换算成vw值也可以  
