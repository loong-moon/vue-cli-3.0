## 代码书写规范

### `命名规范`

1. 所有文件夹，文件统一用pascal命名法，如pascal-case
2. 组件，页面，模块入口统一用index作为入口，如index.vue
3. 代码内变量、属性、方法、ref用小驼峰，如xiaoTuoFeng
4. 代码内组件名、id（只用于js）用大驼峰，如DaTuoFeng
5. `actionType`用大写字母+下划线，如GET_INFO
6. 路由命名固定部分使用pascal命名方式，动态部分使用驼峰命名法，使用的单词应选择与产品模块业务紧密相连的，而不应使用脱离业务的单词；禁止连续动态参数的设置，如：`/book/:bookType/:id`（非法），`/book/type/:typeId/detail/:id`(正解)

### `js/vue规范`

1.  每个文件不超过300行，每块代码必须有注释，
2.  组件中各项`state`的含义必须注释清楚，不同功能模块的`state`属性用空行隔开
3. 工具类和接口类中各方法的使用必须注释清楚
4. 只在组件内部使用的`state`写在组件内部，禁止保存在`store`中
5. 业务功能实现需要多层传递`props`时，必须抽取到`store`中
6. 数组，对象的每一项必须另起一行，禁止在单行内写很多属性

### `css/scss规范`

1. css中禁止使用id，只能使用class

2.  组件内采取单根形式，一个组件只有一个根class，其他class都写在根class内，根样式命名：功能或BEM思想，如： 

   ```
   .site-search{} /* 块 */
   
   .site-search__field{} /* 元素 */
   
   .site-search--full{} /* 修饰符 */ 
   ```

3. 非根样式采用pascal命名法，如block-title

4. 每行一个属性，添加必要的注释

5. 属性建议遵循先布局后描述，先自身后子元素的顺序书写，项目中用了`stylelint-config-recess-order`，不符合将无法提交代码