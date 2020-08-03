const program = require('commander')
const fs = require('fs')
const md2html = require('./md2html')

// gfmオプションの定義
program.option('--gfm', 'GFMを有効にする')
program.parse(process.argv)
const filePath = program.args[0]

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...program.opts(),
}

fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
    return
  }
  const html = md2html(file, cliOptions)
  console.log(html)
})
