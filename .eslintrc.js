module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        // "eslint:recommended",
        "@vue/standard"
    ],
    "rules": {
        "eol-last": 0, //关闭文件末尾强制换行
        "no-multiple-empty-lines": [1, {"max": 3}], //空行最多不能超过3行
        'indent': 'off',
        'vue/script-indent': [
            1, 4,
            {
                'baseIndent': 1,
                'switchCase': 1
            }
        ],
        "import/first": 1, // import必须在文件顶端
        "spaced-comment": 1, // 注释符号后必须有空格
        "no-trailing-spaces": 0, // 关闭尾随空白限制
        "space-before-blocks": [1, "always"], // 不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [1, "always"], // 定义函数时括号前面要不要有空格
        "object-curly-spacing": [1, "always"], // 大括号内总是有空格
        "padded-blocks": 0, // 关闭块内上下空行限制
        "comma-dangle": [1, { // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "only-multiline",
            "exports": "only-multiline",
            "functions": "never"
        }],
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
