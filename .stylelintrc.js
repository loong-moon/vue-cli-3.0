/****
 * stylelint配置
****/

module.exports = {
  // 使用的扩展库
  extends: [
    'stylelint-config-standard', // 标准的规则配置
    'stylelint-config-recess-order', // 属性书写顺序
  ],
  // 第三方插件
  plugins: [
    'stylelint-scss', // 支持scss
  ],
  rules: {
    'selector-max-id': 0, // id选择器最多嵌套层数
    'max-empty-lines': 3, // 最多空行
    'rule-empty-line-before': null, // 去掉规则块前空行的规则
    'selector-list-comma-newline-after': 'always-multi-line', // 选择器列表多行时，在逗号后面总是新行
    'at-rule-no-unknown': null, // 屏蔽原生未知规则检查
    'scss/at-rule-no-unknown': true, // 使用scss插件中未知规则检查
    'declaration-block-trailing-semicolon': null, // 代码块中最后一项声明的分号限制，在jsx语法style属性中和eslint冲突
    'no-descending-specificity': null, // 优先级更高的允许写在前面
    'font-family-no-missing-generic-family-keyword': null, // 允许font-family缺少泛型系列
  }
}
