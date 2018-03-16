/*
  parseQueryString('https://www.baidu.com/problems?offset=100&limit=10')
  return {offset:'100',limit:'10'}
  ?name=&age=12 => {name:'', age:12}
  ?name&age=12 => { name: null, age: '12' }
  ?name=jerry#nice
*/