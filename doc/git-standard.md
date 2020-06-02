## git协作规范

### `分支说明`

1. master分支：必须保证是一个长期稳定随时可打包的版本，只有在正式发布版本的时候才合并到master分支，不同版本通过在其上打tag的方式进行管理
2. develop分支：用于日常开发的分支，每个开发者的合并请求都是合并到此分支
3. feature分支：如feature/xx，用于开发新功能的分支，从develop分支上创建新的分支，开发完成后合并到develop分支，合并完成后删除
4. release分支：如release-x.y.z (x主版本，y次版本，z修订号)，用于版本发布阶段，某版本提交测试后会从develop分支上创建该分支，bugfix时要求各开发人员拉取此分支代码后创建bugfix分支，修复bug后提交合并到release分支，所有bug修复经过测试通过，对外发版后该分支代码要通知owner合并到master和develop分支，在master分支上打上tag后删除
5. hotfix分支：如hotfix/xxx，紧急修复线上bug分支，当线上出现必须紧急修复的bug时启用，完成修复后要将该分支合并到master，develop分支（如果此时存在release分支，也要合并到release分支），完成合并后删除

### `合并规范`

1.  必须通过eslint、stylelint验证，报错、警告必须全部解决后才能提交合并
2.   从其他分支例如 hotfix、release 分支合并到 master 分支必须通过 Merge Request
3.  同一分支pull操作建议使用--rebase，使提交历史更加清晰
4.  将代码合并到master，develop分支时，使用--no-ff，这样被合并的分支被删除后可以保存合并后的历史信息

### `提交规范`

- commit message一般包括三部分：Header、Body和Footer

 

- Header格式：`<type>(<scope>)：<subject>`，如fix(login):修复登录页面的错误处理

  type：用于说明commit的类别

  ​	feat：新增功能

  ​    fix：修复bug

  ​    doc：文档变动

  ​    style：格式变动，对代码实际运行没有影响，如添加空格，缩进，格式化等

  ​    refactor：代码重构和功能优化，未新增功能和修复bug的变动

  ​    test：测试用例的修改

  ​    chore：构建过程或辅助工具的变动

  scope：用于说明commit的影响范围，比如store，reducer，view等不同模块

  subject：是commit的简短描述，最多在50个字符

 

- Body（可选）

  对本次commit的详细描述，可分多行

 

- Footer（可选）

  不兼容变动：需要描述相关信息
  关闭指定Issue：输入Issue信息