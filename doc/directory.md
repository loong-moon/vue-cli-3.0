### 根目录

![根目录](https://github.com/loong-moon/vue-cli-3.0/raw/master/doc/img/directory1.png)

.vscode：vscode的配置，主要是配置了自动修复lint

doc：文档文件

public： 静态文件

server：koa服务，用于模拟接口数据和部署静态服务

src：前端代码目录

.eslintignore：eslint忽略检查配置

.eslintrc.js：eslint配置

.gitignore：git提交忽略配置

.stylelintignore：stylelint忽略检查配置

.stylelintrc.js：stylelint配置

babel.config.js：babel编译配置

nodemon.json：nodemon配置，主要用于热更新重启koa服务

README.md：项目的说明文档，介绍了技术栈，可用脚本；提供了规范文档的链接和目录介绍链接

vue.config.js：vue配置，目前配置了反向代理，共享sass全局变量，性能提示，添加别名



### 代码目录

![代码目录](https://github.com/loong-moon/vue-cli-3.0/raw/master/doc/img/directory2.png)

server：包含接口模拟服务和静态服务

​	conf：服务配置文件

​	controller：控制器目录，用于提供router处理方法

​	middleware：koa服务的自定义中间件

​	mock-data：模拟数据目录，用于提供返回的模拟数据

​	router：路由目录，用于配置拦截访问服务器的路由

​	app.js：模拟服务的启动文件

​	static.js：静态服务的启动文件

src：前端源码目录，包含所有前端的资源和代码

​	api：接口目录，项目中用到的所有接口需按模块在此处编写，以便于不同模块调用和统一修改

​	assets：全局公共资源目录

​		iconfont：项目中用到的自定义图标

​		img：公共图片

​		js：公共js

​		sass: 公共sass及sass变量

​	components：全局公共组件，模块组件应放在模块文件夹中

​	pages：页面模块目录，所有页面和模块应集中放在这里，模块资源应放在模块相关文件夹中

​	router：路由配置目录

​	store：公共状态目录

​	utils：工具方法文件夹，全局方法应放在这里

​		enums： 配置公共枚举js

​		filters： 配置公共过滤器方法

​		mixins：公共混入逻辑

​	App.vue：项目入口组件

​	main.js：项目入口js

