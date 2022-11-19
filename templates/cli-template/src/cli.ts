import cac from "cac"

// 声明 cli `名称`、`版本` 以及 帮助信息
const cli = cac("xxx").version("0.0.0").help()

// 声明 开发-dev 命令
cli.command('dev [root]', 'start dev server').action(async (root: string) => {
  console.log("dev", root)
})

// 声明 打包-build 命令
cli.command('build [root]', 'build in production').action(async (root: string) => {
  console.log("build", root)
})

// 声明 预览-preview 命令
cli.command('preview [root]', 'preview app').action(async (root: string) => {
  console.log("preview", root)
})

// 开始解析命令
cli.parse();