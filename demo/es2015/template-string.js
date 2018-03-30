// 解决多行字符串，以及字符串中的变量使用

const str = `hello world`

const hello = 'hello'
const hello_world = `${hello} world`

const sql = `
  select * from Users
  where firstName='xxx'
  limit 10  
`

const 转义 = `hello \`haha \``
