// 函数参数表达，传参
// es5 默认参数
function fn1(opt) {
    opt = opt || {}
}

// es5 rest 参数
function fn(foo, bar) {
    var restArgs = [].slice.call(arguments,2)
}

// es5 重载
function Person(name){
    this.name = name;
}
Person.prototype.greet = function() {
    var len = arguments.length;
    if(length == 1) return this._greet.apply(this, arguments)
        
    console.log('hey I"m ' + this.name + ".")    
}
Person.prototype._greet = function(name) {
   console.log('hey I"m ' + this.name + ".")   
}

// es6 默认参数
function fn(arg='foo'){}

const noop = () => {}
function api(callback=nopp) {
    return new Promise((reslove, reject) => {
        const value = 'foobar'
        reslove(value)
        callback(null, value)
    })
}

api((err, data) => {
    if(err) return console.log(err)
})

api().then(value => {}).catch(err => error(err))

// 剩余参数
function fn() {
    console.log(Array.from(arguments)) // arguments 转化为数组
}

function fn(foo, ...rest) {}
// rest 实例 merge, mixin
function merge(target = {}, ...objs) {
    for (const obj of objs) {
        const keys = Object.keys(obj);
        for(const key of keys){
            target[key] = obj[key]
        }
    }
}

// 尽量使用 ...args 代替 arguments
console.log(merge({a:1}, {b:2}, {c:3}))

// 解构传参, 不会替换函数中调用的上下文
function sum(...nums){
    return nums.reduce((a,b) => a + b)
}

