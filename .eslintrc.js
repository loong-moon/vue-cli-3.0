module.exports = {
  // 以当前目录为根目录，不再向上查找
  root: true,
  // 运行环境
  env: {
    browser: true, // 支持浏览器全局变量
    es6: true, // 支持es6全局变量
    node: true, // 支持node环境全局变量
  },
  // 使用的扩展库
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // 解析器配置
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 检查规则
  rules: {
    'eol-last': 0, // 关闭文件末尾强制换行
    'no-multiple-empty-lines': [1, { max: 3 }], // 空行最多不能超过3行
    indent: [1, 2], // 缩进
    'vue/script-indent': [1, 2], // vue中script部分的缩进
    'vue/html-indent': [1, 2], // vue中html部分的缩进
    'import/first': 1, // import必须在文件顶端
    'spaced-comment': 1, // 注释符号后必须有空格
    'no-trailing-spaces': 0, // 关闭尾随空白限制
    'space-before-blocks': [1, 'always'], // 不以新行开始的块{前面要不要有空格
    'space-before-function-paren': [1, 'always'], // 定义函数时括号前面要不要有空格
    'object-curly-spacing': [1, 'always'], // 大括号内总是有空格
    'padded-blocks': 0, // 关闭块内上下空行限制
    'comma-dangle': [1, { // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never'
    }],
  },
}
