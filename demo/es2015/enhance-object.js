// 函数属性省略
const obj = {
    bar(){
        return 'bar'
    }
}

// 支持__proto__ 注入
// demo 系统的中心控制器，nodejs events标准库提供的 EventEmitter 用于事件状态机的类
import { EventEmitter } from 'events'
const emitter = new EventEmitter();
emitter.on('event', msg => {
    console.log(`receive message: ${msg}`)
})

emitter.emit('event', 'hello world')

// 通过继承实现使用EventEmitter, 获取单一实例
class Mechine extends EventEmitter {
    //TODO
}

// ES2015 支持注入 __proto__, 使其直接指定类的一个实例，避免创建一个类实现继承
import { EventEmitter } from 'events'
const machine = {
    __proto__ : new EventEmitter(),
    method() {/*... */}
}

console.log(machine) // => EventEmitter{} 是它的实例
machine.on('event', msg => console.log(`receive message: ${msg}`));
machine.emit('event', 'hello world');





// 可动态计算的属性名, 是为symbol准备的
const obj = {}
const key = 'foo'
obj['abc' + key] = 'bar'
// 等同于
const prefix = 'es2015'
const o1 = {
    [ prefix + 'enhance']:'foobar'
}

const fibo = {
    a: 0,
    b: 1,
    [ Symbol.iterator]() {
        return {
            next() {
                [fibo.a, fibo.b] = [fibo.b, fibo.a + fibo.b]
                return { done: false, value: fibo.b }
            }
        }
    }
}

for (const n of fibo) {
    if(n  > 100) break;
    console.log(n.toString() + ' ')
}

// 属性名定义省略
const foo = '123'
const bar = () => foo;
const o = {foo, bar};

// 表达式结构，实现多返回值
// 使用对象
function fn1() {
    return {
        value: 1,
        value: 2,
    }
}
// 使用数组
function fn2() {
    return [1,2]
}
// nodejs 标准回调函数
fs.readFile(__dirname+'/let.html',(error, data) => {});

// 使用对象作为返回载体
function getState(){
    return {
        error:null,
        logined: true,
        user: {}
    }
}
const { error, logined, user }  = getState()
//使用数组作为多返回值
const [foo, bar] = [1,2]
const [foo, , bar] = [1,2,3]
const [a, b, ...rest] = [1,2,3,4,5]

// 使用场景1 promise
function getData() {
    return new Promise((resolve, reject) => {
        //...
        resolve(['foo', 'bar'])
    })

}

getData().then(([value1,value2]) => {
    console.log(value1, value2);
})

// 参数多，某些场景不需要全部参数，使用对象传递
function fetchData() {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            message: 'OK',
            data: ['foo','bar']
        })
    })
}

fetchData().then(({data}) => console.log(data));

// 变量交换
let a = 1, b = 2;
[a, b] = [b, a];

// 高级用法
// 1. 解构别名
function fetchData() {
    return {
        response: ['foo','bar']
    }
}
const { response: data } = fetchData();
console.log(data);

// 2. 无法匹配的缺省值, 返回undefined, 或者自定义默认值
const { foo, bar } = {foo: 1}
const [a,b, c] = [1,2]
const {foo = 1} = {bar:1}
const [a, b = 2] = [1]

// 3. 深层匹配， 配合array.map
const sourceData = {
    items:[
        {
            image:'xxx',
            title:'xxx',
            link: 'xxx',
            author: 'xxx',
            published:'xxx',
            media:{
                m:'xxxxx'
            }
        },
        {
            image:'xxx',
            title:'xxx',
            link: 'xxx',
            author: 'xxx',
            published:'xxx',
            media:{
                m:'xxxxx'
            }
        },

    ]
    
}
const data = sourceData.items.map(
    ({title, link, author,published,media:{m:image}}) => ({
        title,link,author,image,published
    })
)

const {a, b:{c}} = {a:1, b: {c:2}}
console.log(a,c)//1,2
const {d, e:[f]} = {d:1, e: [2,3]}
console.log(d,f);// 1,2

const [g, {h}] = [1, {h: 2}]
console.log(g,h)//1,2
consot [i, [j]] = [1,[2,3]]
console.log(i, j)//1,2

const arr = ['Mike','Peter','Ben','William','John']

for (const [index, item] of arr.entries()) {
    console.log(index, item);
    if(item.match(/^\W/)) break;
}

