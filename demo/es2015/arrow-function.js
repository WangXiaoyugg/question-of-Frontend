// 单一箭头函数, 常用于做简单的处理
const fn = foo => `${foo} world`

let arr1 = ['a','b','c','def','gh']
arr2 = arr1.filter(item => item.length >= 2)

// 多参数的箭头函数, 常用于排序
const fn = (foo, bar) => foo + bar
let arr3 = ['a','b','c','def','gh']
arr4 = arr.sort((a, b) => a.length < b.length)

// 多行箭头函数
foo => {
    return `${hello} world`
}

(foo, bar) => {
    return foo + bar
}

// 无参数箭头函数
const greet = () => 'Hello World'

// 箭头函数简洁直观, 特别适合单行回调函数
const arr5 = [1,2,3]
const square = arr.map(x => x * x)

const names = ['jack', 'will','mike','mary', 'sim','san']
const set = names.map((name, index) => ({
    id: index+1,
    name: name
}))
.filter(man => man.id % 2 == 1)
.map(man => [man.name])
.reduce((a,b) => a.concat(b));

// 箭头函数可以this 穿透，获取上一层作用域的this
// demo 对数据进行查询和筛选
const DataCenter = Object.freeze({
    baseUrl: 'http://www.baidu.com',
    search(query) {
        fetch(`${this.baseUrl}/search?query=${query}`)
            .then(res => res.json())
            .then(rows => {
                //TODO
            })

    }
})
// promise 配合 箭头函数
const DataCenter  = {
    baseUrl: 'http://www.baidu.com',
    search(query) {
        return fetch(`${this.baseUrl}/search?query=${query}`)
                    .then(res => res.json())
                    // this 指向 dataCenter
                    .then(rows => fetch(`${this.baseUrl}/fetch?ids=${rows.join(',')}`))
                    .then(res => res.json())
    }
}
DataCenter.search('hello')
    .then(rows => console.log(rows))


// 箭头函数对上下文绑定是强制的，无法通过call， apply, 改变， bind 可以
// 箭头函数不要随意在顶层作用域使用，以免出现问题
// 箭头函数里也没有arguments, callee, caller对象

// 想使用argumenst的需求, rest 参数
const fn = (...args) => {
    console.log(args[0])
}
fn(1,2,3) // 1



