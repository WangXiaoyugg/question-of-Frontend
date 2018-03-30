// weakset 不能包含值类型元素
// weakset 不能包含无引用的对象
// weakset 无法知道大小， 无法知道其中所包含的函数

const weakset = new WeakSet()
let foo = {bar: 1}
weakset.add(foo)
console.log(weakset.has(foo)) // true
foo = null;
console.log(weakset.has(foo)) // false

// 将值类型加入到 weakset 中
const weakset = new WeakSet();
let str = new String('Hello')

weakset.add(str)
console.log(weakset.has(str)) // true

str += ' world'
console.log(weakset.has(str)) // false

// weakSet 意义：优化程序的内存使用， 实现Javascript 对象存活情况的监控工具
