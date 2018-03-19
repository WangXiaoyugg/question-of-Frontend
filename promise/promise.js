function Promise(executor) {
    var self = this;
    // 保存成功和失败的函数的数组
    self.resolvedCallback = []
    self.rejectedCallback = []
    // 执行的流程状态
    self.status = 'pending'
    
    function reslove(val) {
        if( self.status === 'pending') {
            self.status = 'resolved';
        }
        self.data = val;
        for(var i = 0 ; i < self.resolvedCallback.length; i++){
            f = self.resolvedCallback[i](value);
            f(value); // 标准执行没有this;
        }
    }

    function reject(reason) {
        if( self.status === 'pending') {
            self.status = 'rejected';
        }
        self.data = reason;
        for(var i = 0 ; i < self.rejectedCallback.length; i++){
            f = self.rejectedCallback[i](value);
            f(value); // 标准执行没有this;
        }
    }

    
    try {
        executor(reslove,reject)    
    } catch(e) {
        reject(e)
    }
   
}


Promise.prototype.then = function(onResolved, onRejected) {
    var self = this;

    if(typeof onResolved !== 'function'){
       onResolved = function(){}     
    }

    if(typeof onRejected !== 'function'){
       onRejected = function(){}     
    }

    var promise2
    if (self.status === 'resolved') {
        promise2 = new Promise(function(resolve, reject){
            try {
                var x = onResolved(self.data)
                if ( x instanceof Promise) {
                    x.then(resolve, reject);
                } else {
                    resolve(x)
                }
            }catch(e){
                reject(e)
            }
            
        })
    }

    if (self.status === 'rejected') {
        promise2 = new Promise(function(resolve, reject){
            try {
                var x = onRejected(self.data)
                if ( x instanceof Promise) {
                    x.then(resolve, reject);
                } else {
                    resolve(x)
                }
            }catch(e){
                reject(e)
            }
            
        })
    }

    if(self.status === 'pending') {
        promise2 = new Promise(function(resolve,reject){
            self.resolvedCallback.push(function(val){
                try {
                    var x = onResolved(val)
                    if(x instanceof Promise){
                        x.then(resolve, reject) 
                    } else {
                        resolve(x) 
                    }
                } catch(e){
                   reject(e)     
                }
            })

            self.rejectedCallback.push(function(val) {
                try {
                    var x = onRejected(self.data)
                    if ( x instanceof Promise) {
                        x.then(resolve, reject);
                    } else {
                        resolve(x)
                    }
                }catch(e){
                    reject(e)
                }
            })
        })
    }

    return promise2
}

function ResolvedPromise(promise, x, resolve, reject){
    if( promise === x) {
        reject(new TypeError('Chaining cycle detected for promise'))
        return ;
    }

    if(x instanceof Promise) {
        x.then(reslove, reject)
        return;
    }

    if (x !== null && typeof x === 'object' || typeof x === 'function' ){
        try {
            then = x.then;
            var called = false;
            if(typeof then === 'function'){
                then.call(x,function resolvedPromise(y){
                    if (!called) return;
                    called = true
                    ResolvedPromise(promise,y,resolve, reject)
                },function rejectPromise(r){
                    if (!called) return;
                    called = true
                    reject(r);
                })
            } else {
                resolve(x);
            }
        }catch(e){
            reject(e)
        }
    } else {
        resolve(x);
    }
}

Promise.deferred  = function(){
    var dfd = {};
    dfd.promise = new Promise(function(resolve, reject){
        dfd.resolve = resolve
        dfd.reject = reject
    })

    return dfd;

}
module.exports = Promise