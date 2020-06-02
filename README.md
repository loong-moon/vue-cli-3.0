技术栈：vue + vue-router + vuex + element-ui + axios + sass + echarts + iconfont + eslint + stylelint + koa + mockjs

## 可用脚本

在项目目录中，你可以运行:

### `yarn start/serve`

以开发模式运行项目，<br />在浏览器中可以通过打开 [http://localhost:8080](http://localhost:8080) 查看。

编辑时支持热更新，<br />
还可以在控制台中看到所有lint错误。

### `yarn build`

在 `dist` 文件夹生成生产环境文件。<br />
在生产模式中正确的生成打包文件，并优化构建以获得最佳性能。

生成的文件已经压缩，文件名添加了哈希值。<br />
运行完成后就可以用于部署了。

### `yarn lint`

检测当前项目中js和vue文件是否有不符合规范的代码。

### `yarn lintstyle`

检测当前项目中css和scss文件是否有不符合规范的代码。

### `yarn mock`

开启一个mock服务，可以用来模拟数据返回。

编辑server文件夹中文件时支持热更新。

把请求地址代理到`http://localhost:3100`即可返回已经配置好的数据。

### `yarn static`

开启一个静态服务，可以用于部署或模拟部署。

### `yarn report`

在 `dist` 文件夹生成生产环境文件。

并会生成一个report.html，可以用来查看各个生成的js的组成，可用于优化。



## 项目规范

在项目中提交的时候会进行代码检查，如果不符合规范将不能提交:

- [代码书写规范](./doc/code-standard.md)
- [git协作规范](./doc/git-standard.md)
- [接口规范](./doc/api-standard.md)



## 目录介绍

[代码书写规范](./doc/directory.md)

