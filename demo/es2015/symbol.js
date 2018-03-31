// Symbol 互不等价唯一值, 避免对象属性发生冲突

const symbol = Symbol()

const syb1 = Symbol('foo')
const syb2 = Symbol('foo')
syb1 === syb2 // false

// symbol 函数参数传递， 值传递

const sybObj = Object(Symbol)

// Symbol.for 全局注册，唯一
const symbol = Symbol.for('foo')
const obj = {
    symbol: 'bar'
}

//Symbol.keyFor 获取key
Symbol.keyFor(symbol)

// Symbol.iuterator 可迭代对象 for of
// Array, String, TypedArray, Map, Set, Generator , NodeList

// 单向链表
class Item {
    constructor(value, prev=null,next=null){
        this.value = value
        this.next = next
    }
    get hasNext() {
        return  !!this.next
    }
}

class LinkedList {
    constructor(iterable) {}
    push(value)
    pop()
    unshift(value)
    shift()
    get length() {}
    get head() {}
    get tail() {}
    [Symbol.iterator]() {
        let curItem = {next: this.head};
        return {
            next() {
                curItem = curItem.next;
                curItem.next = curItem.next || {hasNext: false}
                
                return {
                    value: curItem.value,
                    done: !curItem.hasNext
                }
            }
        }
    }
}

// Symbol.hasInstance
class Foo {
    static [Symbol.hasInstance](obj) {
        console.log(obj)
        return true
    }
}
console.log({} instanceof Foo); // true;

// Symbol.match
const re = /foo/
re[Symbol.match] = function(str){
    const reg =this;
    console.log(str) // bar
    return true;
}
'bar'.match(re); // true

// Symbol.unscopables // 那些属性被with 禁止 ,可以自己设置
Array.prototype[Symbol.unscopables];
const data  = {a:1,b:2}
data[Symbol.unscopables] = {
    a: true,
    b: false
}

// Symbol.toPrimitive 转换
const Ten = {
    [Symbol.toPrimitive](hint) {
        switch(hint){
            case 'number':
                return 10
            case 'string':
                return 'Ten'
            case 'default':
                return true        
        }
    }
}

// Symbol.toStringTag
class Bar {}
class Foo {
    get [Symbol.toStringTag]() {return 'Bar'}
}
const obj = new Foo()
console.log(obj.toString()) // [object Bar]


