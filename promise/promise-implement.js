var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise() {
    // 保存状态
    var state = PENDING;

    // 保存值
    var value = null;
    
    // 保存 失败或成功的调用的then、done的处理函数
    var hanlders = [];


    function fulfill(result) {
        state = FULFILLED;
        value = result;
        hanlders.forEach(handler);
        handler = null
    }

    function reject(error){
        state = REJECTED;
        value = error;
        hanlders.forEach(handler);
        handler = null
    }
    
    function resolve(result) {
        try {
            var then = getThen(result);
            if(then){
                doResolve(then.bind(result), resolve, reject);
                return;
            }
            fulfill(result)
        }catch(e){
            reject(e)
        }
    }

    function handle(handler){
        if(state === PENDING){
            hanlders.push(handler)
        } else {
            if (state === FULFILLED && typeof handler.onFulfilled === 'function'){
                handler.onFulfilled(value)
            }

            if (state === REJECTED && typeof handler.onRejected === 'function'){
                handler.onRejected(value)
            }
        }
    }

    this.done = function(onFulfilled,onRejected){
        setTimeout(function(){
           handle({
               onFulfilled: onFulfilled,
               onRejected: onRejected,
           })      
        },0)
    }

    this.then = function(onFulfilled,onRejected) {
        var self = this;
        return new Promise(function(resolve,reject){
            return self.done(function(result){
                if(typeof onFulfilled === 'function'){
                    try {
                        return resolve(onFulfilled(result))
                    }catch(ex){
                        return reject(ex)
                    }
                } else {
                    return resolve(result)
                }
            },function(error){
                if(typeof onRejected === 'function'){
                    try {
                        return resolve(onRejected(error))
                    }catch(ex){
                        return reject(ex)
                    }
                } else {
                    return reject(error)
                }
            })
        })
    }

    doResolve(fn, resolve, reject);

    function getThen(value){
        var t = typeof value;
        if(value && (t === 'object' || t === 'function')){
            var then = value.then;
            if(typeof then === 'function'){
                return then
            }
        }
        return null;
    }

    function doResolve(fn, onFulfilled, onRejected){
        var done = false;
        try {
            fn(function(value){
                if(done) return;
                onFulfilled(value)
            },function(reason){
                if(done) return;
                done = true;
                onRejected(reason)
            })

        }catch(ex){
            if(done) return;
            done = true;
            onRejected(ex)
        }
    }

}

