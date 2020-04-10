module.exports = {
  productionSourceMap: false,

  devServer: {
    // proxy: 'http://0.0.0.0:8888'
  },

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // 向所有 Sass 样式传入共享的全局变量
        prependData: '@import "@/assets/sass/mixin.scss";'
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

    // 添加别名
    config.resolve.alias.set('@axios', '@/api/axios')
  }
}
