// 映射 关联数组
// 若干个键值对组成的集合， 每个key只能出现一次
// methods set, get, delete, clear, entries, has, keys,values,size

const map1 = new Map([['foo', 1], ['foo', 2]]);
console.log(map1.get('foo')); // 2

const map2 = new Map();
map2.set("foo", "hello")
map2.set("bar", "world")
map2.set('bar','es2015') // es2015 覆盖world

map2.delete('foo') 
map2.clear()

map2.get('bar') // 获取不存在的键会返回 undefined
map2.has("bar") // true

for(const [key, value] of map1) {
    console.log(`${key}: ${value}`)
}

map1.forEach((value, key, map) => {
    console.log(`${key}: ${value}`)
})

// json 序列化， 可以使用任意对象为键
const str1 = JSON.stringify(map1);

const otherMap = new Map(JSON.parse(str1));









