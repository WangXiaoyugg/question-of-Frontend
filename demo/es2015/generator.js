// generator 生成器

// fibonacci 实现, 必须要指定一个数量来得到相应的队列
const fibonacci = [0,1]
const n = 10
for(let i = 2 ; i < n - 1; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
}

// 生成器实现 fib
function* fibo() {
    let a = 0;
    let b = 1;

    yield a;
    yield b;

    while(true){
        let next = a + b;
        a = b;
        b = next;
        yield next;
    }
}

// 生成器实例
let generator = fibo();
for(var i = 0; i < 10; i++) {
    generator.next().value
}

/**
 * yield 不是推出函数体，而是切出当前函数的运行时，同时将一个值带到主线程中
 * 类似于类协程，提供暂停的功能
 * 可以带出协程，主线程通过生成器对象的方法将值带回生成器的执行对象中 
 */
const inputValue = yield outputValue

/**
 * 使用方式
 * 1. 构造生成器函数
 *  a1 = 2; aN = a(N-1)/ 2(aN-1) + 1
 * 2. 启动生成器
 * 3. 运行生成器内容
 */ 

 function* genFn(){
     let a = 2;
     yield a;
     while(true) {
         let next = a / 2 * a + 1
         a = next;
         yield next
     }
 }

 const gen = genFn();

 for(const a of gen ){
     if( a < 1/100) break
     console.log(a)
 }

 /**
  * 伪代码实现生成器实例
  * class Generator {
  *    next(value) // 会返回状态对象 {value: any, done: boolean}， done true 终止
  *    throw(error) //提前让生成器进入终止状态，将error 错误抛出
  *   [@@iterator]() //Symbol.iterator 实现可迭代对象的方法
  * }
  */

  // 判断生成器实例是否是一个生成器函数所对应的
  console.log(gen instanceof genFn);// 浏览器没有暴露

  // hack 利用生成器函数的constructor 检验
  function isGeneratorFunction(fn) {
      const genFn = (function* (){}).constructor
      return  fn instanceof genFn;
  }

  // lodash 用 toStringTag 实现检测
  function isGenerator(obj) {
      return obj.toString ? obj.toString() === '[object Generator]' : false
  }

  // 通过生成器必定带有@@toStringTag属性
  function isGenerator(obj) {
      if(Symbol && Symbol.toStringTag) {
          return obj[Symbol.toString] === 'Generator'
      } else if (obj.toString) {
          return obj.toString() === '[object Generator]'
      }

      return false
  }

  // 做类检测
  function isGeneratorFunction(fn) {
      return fn[Symbol & Symbol.toStringTag ? Symbol.toStringTag : false] === 'GeneratorFunction'
  }

  // 生成器的嵌套, 微积分，
  // 分段函数 f(x) = {
        x * x,  x < 0
        sinx , x >=0
  //}
  function* foo() {
      yield 1
      yield 2
  }

  function* bar() {
      yield* foo()
      yield 3
  }
  for(const n  of bar()) {
      console.log(n)
  }

  // 使用场景多层嵌套的异步操作扁平化

  function echo(content) {
      return callback => {
          callback(null, content)
      }
  }
  function run(genFn){
      const gen = genFn();
      
      const next = value => {
          const ret = gen.next(value)
          if(ret.done) return
          
          ret.value((err, val) => {
              if(err) return console.log(err)
              
              next(val)
          })
      }
      
      next()
  }

  run(function* () {
      const msg1 = yield echo('Hello')
      const msg2 = yield echo(`${msg1} world`)

      console.log(msg2)
  })

  // node co 库
  import co from 'co'
  import { promisify } from 'bluebird'
  import fs from 'fs'
  import path from 'path'
  
  const filePath = path.resolve(process.cwd(), './let.html')
  const defaultData = new Buffer('Hello world')
  co(function* () {
      const exists = yield promisify(fs.exists)(filePath)
      
      if(exists) {
          const data = yield promisify(fs.readFile)(filePath)
      } else {
          yield promisify(fs.writeFile)(filePath, defaultData)
      }
  })