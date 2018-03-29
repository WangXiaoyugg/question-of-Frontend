// const 原理就是 变量名 和内存地址建立的不可变的绑定

// 基本类型不可变
// const PI = 3.1415926

// PI = 3.14 // 报错

// 对象成员可变

const foo = {
    a: 1,
    b: 2
}

foo.a = 3
foo.b = 4


// 首层对象不可变
const o1 = Object.freeze({
    a:1,
    b:2
})
o1.a = 2 // chrome 不报错，但是不会改变o1的属性

// 第二层是可变的对象
const o3 = Object.freeze({
    a : {}
})
o3.a.b = 1



