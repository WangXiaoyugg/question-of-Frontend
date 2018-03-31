class Animal {
    constructor(family, specie, hue) {
        this.family = family
        this.specie = specie
        this.hue = hue // 信仰
    }

    yell() {
        console.log(this.hue)
    }
}

const doge = new Animal('Canidae', 'Canis lupus', 'Woug')

// promise 使用
class Point{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    moveRight(step) {
        return new Promise(resolve => reslove({
            x: this.x + step,
            y: this.y
        }))
    }
}

const p = new Point(2,5)
p.moveRight(3).then(({x,y}) => console.log(`${x}, ${y}`))


// 继承 Nodejs 继承实现
import { inherits } from 'util'

function Point2D(x, y) {
    this.x = x;
    this.y = y;
}

Point2D.prototype.toString = function() {
    return `(${this.x}, ${this.y})`
}

function Point3D(x,y,z) {
    Point3D.super_.call(this,x,y);// super_ 指向了 父类
    this.z = z;
}

// Point3D 继承 Point2D
inherits(Point3D, Point2D);
Point3D.prototype.toString = function() {
    return `(${this.x}, ${this.y}, ${this.z})`
}
const point2d = new Point2D(2,3)
const point3d = new Point3D(1, 4, 3)

// es6 实现继承

class Point2D {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}

class Point3D extends Point2D {
    constructor(x,y,z) {
        super(x, y)
        this.x = x
    }

    toString() {
         return `(${this.x}, ${this.y}, ${this.z})`
    }
}

// extends 可以继承构造函数

// 子类继承父类，在子类的构造函数使用super 才能调用父类的this
class Foo {}
class Bar extends Foo {
    constructor(){
        super();
        this.property = 1
    }
}

new Bar();

// getter, setter 元编程，允许程序可以对运行时的对象进行读取和操作
// demo 计数器
const counter = {
    _count: 0,
    get value() {
        return ++this._count
    }
}

const List = {
    _array: [],
    set new(value) {
        this._array.push(value)
    },
    get last() {
        return this._array[0]
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get d() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

const p = new Point(3, 4)
console.log(p.d)

// 静态方法
class Animal {
    constructor(family, speice, hue) {
        this.family = family
        this.specie = speice
        this.hue = hue
    }

    yell() {
        console.log(this.hue)
    }

    static extend(constructor, ..._args) {
        return class extends Animal {
            constructor(...args){
                super(..._args)
                constructor.call(this,...args)
                
            }
        }
    }
}

const Dog = Animal.extend(function(name) {
    this.name = name
},'Canidae','canis lupus', 'Woug')

// Node 类, node 实例之间建立从属关系，且每一个node实例下方可以带有多个node子实例
// Node 类自身可以检索到所有实例的数量

class Node {
    constructor(parent = null) {
        this.__parent = parent
        this.__children = new Set()
    }

    // 判断是否是根结点
    get isRoot() {
        return !this.__parent
    }

    // 存储根节点
    static addRoot(root) {
        Node.roots = !Node.roots ? [ root ] : Node.roots.concat([ root ])
    }
    
    // 添加子节点 
    createChild() {
        const node = new Node(this);
        this.__children.add(node)
        return node;
    }

    // 删除当前节点
    removeFromParent() {
        this.__parent = null;
        this.__parent.__children.delete(this);
    }

    // 计算自身在内所有向下子节点数量 ,怎么递归的？
    get size() {
        let size = 0;
        for (const node of this.__children) {
            size += node.size
        }
        size = size ? size + 1 : 1
        return size;
    }

    // 所有根节点求和，得到所有节点的数量
    static get size() {
        return Node.roots.map(root => root.size).reduce((a, b) => a + b)
    }
}

const root1 = new Node()
root1.createChild().createChild();
const root2 = new Node()
root2.createChild();

console.log(root1.size) //3
console.log(root2.size) //2
console.log(Node.size) //5

class Foo {}
const obj = new Foo();
console.log(obj.toString())

// 自定义toString标签
class Bar {
    get [Symbol.toStringTag]() {
        return 'Bar'
    }
}
const o = new Bar();
console.log(o.toString())

// class 不支持声明提升
// class 不支持私有属性
// class 不支持实例属性，可通过getter, setter实现
// class 不支持多重继承
// 暂时没有类似于协议和接口等的概念
// class 类继承是单向的
