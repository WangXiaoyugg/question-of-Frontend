// 异步 实现动画效果，回调
function animate1(fn){}
function animate2(fn){}
function animate3(fn){}
function animate4(fn){}
animate1(() => {
    animate2(() => {
        animate3(() => {
            animate4(() => {

            })
        })
    })
})

// 一旦动画改变，代码会也要大改， promise 提出来
animate1()
    .then(() => animate2())
    .then(() => animate3())
    .then(() => animate4())
  
// promise ajax
fetch('xxx.com/query')
    .then(res => res.json())
    .then(data => {})
    .catch(err => console.error(err))
    
// promise 三种状态 pending, fulfilled, rejected

/**
 * 语法
 * 1. 创建promise 对象
 * 2. 异步操作 
 */

 function aysncMethods(...args){
     return new Promise((resolove, reject) => {})
 }

 new Promise((resolve, reject) => {
     api.call('fetch-data', (err,data) => {
         if(err) return reject(err)
        
         resolve(data)   
     })
 })

 new Promise(function(){
     throw new Error('test')
 }).catch(err => console.error(err))

 
 // promise 是流式的
 asyncMethod()
    .then((...args) => args)
    .catch(err => console.log(err))

 
// Promise.all(iterable)
// 所有对象进入成功状态，对象也会进入成功状态
// 如果其中一个进入失败状态，所有对象进入失败状态，并把那个失败状态的错误信息作为自己的错误消息

const promises = [async(1), async(2), async(3), async(4)]
Promise.all(promises)
    .then(values => {})
    .catch(err => console.log(err))

// Promise.race(iterable) 
// 监听所有Promise对象，并等待第一个进入完成状态的Promise对象，一旦有第一个Promise 对象进入完成状态
// 该方法返回Promise对象便会根据第一个完成的Promise 对象的状态而改变

const promises = [async(1), async(2), async(3), async(4)]
Promise.race(promises)
    .then(values => {})
    .catch(err => console.error(err))

    