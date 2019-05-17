const path = require('path')
module.exports = {
    productionSourceMap: false,

    devServer: {
        proxy: 'https://gpUYlmos.api.lncld.net'
    },

    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // 向所有 Sass 样式传入共享的全局变量
                data: `@import "@/assets/sass/_mixin.scss";`
            }
        }
    },

    chainWebpack: config => {
        const isProd = process.env.NODE_ENV === 'production'
        // console.log(config.optimization)
        if (isProd) {
            // 配置如何展示性能提示
            config.performance
                .hints('warning')
                .maxEntrypointSize(3000000)
                .maxAssetSize(1000000)
                .assetFilter((assetFilename) => {
                    // 配置计算性能提示的文件类型
                    return (
                        assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
                    )
                })
        }

        // 为axios引用设置别名
        config.resolve.alias
            .set('@axios', path.resolve(__dirname, './src/assets/js/axios'))
    }
}
