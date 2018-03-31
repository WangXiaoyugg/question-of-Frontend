// 可以对 对象的绝大部分行为进行监听和干涉

const obj = {}
const proxy = new Proxy(obj, {
    //..
})

// hander.has 监听 in
// Object.preventExtensions 禁用时失效
// configurale false 失效
const p = new Proxy ({}, {
    has(target, prop){
        console.log(`check "${prop}" is in the target or not`)
        return true
    }
})
console.log('foo' in p)

// handler.get
// 当 coonfigurable writbale 都为falsse 失效
const obj = {foo:1}
const p = new Proxy(obj, {
    get(target, prop) {
        console.log(`program is trying to fetch the prop "${prop}`)
        return target[prop]
    }
})
obj.foo

// hanlder.set, 需要返回一个布尔值
const obj = {}
const p = new Proxy(obj, {
    set(target, prop, value) {
        console.log(`setting value "${value}" on the key "${prop}" in the target object`)
        target[prop] = value
        return true
    }
})

p.foo = 1

// hanlder.apply
const sum = function(...args) {
    return args.map(Number).filter(Boolean).reduce((a, b) => a + b)
}

const p = new Proxy(sum, {
    apply(target, thisArg, args){

        return target.call(thisArg,...args)
    }
})

// hander.construct , 监听类 
// 返回值必须是一个对象
class Foo {}
const p = new Proxy(Foo, {
    construct(target, args, newTarget) {
        return {arguments: args} // 返回 new 得到的实例
    }
})

const obj = new p(1,2,3)

// 可删除的proxy对象， 接触监听
const obj = {foo:10}
const revocable = Proxy.revocable(obj, {
    get(target, prop) {
        return 20
    }
})

const proxy = revocable.proxy;

console.log(proxy.foo)
revocable.revoke(); // 刚使用的proxy 对象解除的方法

// 使用场景
const obj = {}
obj.layer1.layer2.foo = 1
obj.layer1.layer2.layer2.bar = 2
console.log(obj)

class Tree {
    constructor() {
        return new Proxy({}, {
            get(target,prop) {
                if(!(prop in target)) target[prop] = new Tree()
                return target[prop]   
            }
        })
    }
}

const tree = new Tree()
tree.brance1.brance2.leaf = 1
tree.brance1.brance2.brance3.leaf = 2

// 只读视图
const NOPE = () => {
    throw new TypeError('Cannot modify the readonly data.')
}

function readonly(data) {
    return new Proxy(data, {
        set: NOPE,
        deleteProperty: NOPE,
        setPrototypeOf: NOPE,
        preventExtensions: NOPE,
        defineProperty: NOPE,
        get(target, prop) {
            const result = target[prop]
            if(Object(result) === result) {
                return readonly(result) // 递归调用
            }
            return result
        }
    })
}

const data = { foo: {bar:1}, bar:2}
const readonlyData = readonly(data)
readonlyData.bar = 2 // 报错
readonly.foo.bar = 2 // 报错，

// 业务非入侵式测试框架
import api from './api'

export default hook(api, {
    methodName(fn) {
        return function(...args) {
            console.time('methodName')
            return fn(...args)
                .then((...args) => {
                    console.timeEnd('methodName')
                    return Promise.resolve(...args)
                })
        }
    }
})

function hook(obj, cases) {
    return new Proxy(obj, {
        get(target, prop) {
            if((prop in cases) && (typeof target['prop'] === 'function')) {
                const fn  = target[prop]
                return cases[prop](fn)
            }
            return target[prop]
        }
    })
}
