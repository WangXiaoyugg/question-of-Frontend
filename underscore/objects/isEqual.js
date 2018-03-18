// 两个对象的深度比较，会优化， 决定两个对象是否相等

_.isEqual = function(a,b){
    return eq(a,b)
}

var _  = function(obj) {
    // oop 调用
    if (obj instanceof _){
        return obj
    }

    //不是调用 new 运算符
    if(!(this instanceof _)){
        return new _(obj)
    }

    // 将obj赋值给this._wrapped
    this._wrapped = obj;

}

// 内部会递归调用
const eq = function(a,b, aStack, bStack) {
    // 0  === -0 应该是不相等的；
    if ( a === b) return a !== 0 || 1/a === 1/b // 1/0 !== 1/-0 
    
    // 处理a,b为null,undefined
    if (a == null || b == null) return a === b
     
    // a,b 为 _ 的实例, 比较wrapped 属性值
    if(a instanceof _) a = a._wrapped;
    if(b instanceof _) b = b._wrapped;
    
    // 获取 a 的变量类型
    var className = toString.call(a);
    // 类型不同，直接返回false;
    if(className !== toString.call(b)) return false;

    // 这五种类型可以直接根据值比较
    switch (className) {
        // 正则会转化成 成字符串比较 '' + /a/i === '/a/i'
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b
        
        // NaN 和 NaN 是相等的
        // +a !== +a  => NaN
        // +b !== +b  => NaN
        case '[object Number]':
            if(+a !== +a) return +b !== +b;

            // 排除0 的干扰
            return +a === 0 ? 1 / +a === 1 / b : +a === +b
        

        // date 和 boolean 是一类
        // obj 为 Date 或者 Boolean
        // +obj 会将 obj 转换为 Number   
        case '[object Date]':
        case '[object Boolean]':
            return +a  === +b
        
        // 判读 a 是否是数组    
        var areArrays = (className === '[object Array]')
        if(!areArrays){
            // a, b 不是object 直接false
            if(typeof a !== 'object' || typeof b !== 'object') return false;

            // 通过构造函数来判断 a 和 b 是否相同
            // 也并不一定 a 和 b 就是 unequal
            // 比如 a 和 b 在不同的 iframes 中！
            var aCtor = a.constructor , bCtor = b.constructor;
            if(aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                                    _.isFunction(bCtor) && bCtor instanceof bCtor)
                               && ('constructor' in a && 'constructor' in b)) {
                return  false;                    
            }
           
        }

        // 第一次调用 eq() 函数，没有传入 aStack 和 bStack 参数
        // 之后递归调用都会传入这两个参数 
        // 对于数组和对象只能用递归了，同时用aStack和bStack来暂存递归中的子对象。
        // 这里一个小技巧的就是先判断数组/属性的长度，如果不相等可以有效地减少递归

        aStack = aStack || []
        bStack = bStack || []
        var length = aStack.length;
        while(length--){
            if(aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        // 将嵌套的对象和数组展开
        // 如果 a 是数组
        // 因为嵌套，所以需要展开深度比较
        if(areArrays) {
            length = a.length;
            // 根据length 比较是否递归对比
            if(length !== b.length) return false;

            while(length--){
                if (!eq(a[length],b[length],aStack,bStack)) return false;
            }
        } else {
            var keys = _.keys(a), key;
            length = keys.length;
            // 对象的key 长度不等
            if(_.keys(b).length !== length) return false;
            
            while(length--){
                keys = keys[length]
                if(!(_.has(b,key) && eq(a[key],b[key],aStack,bStack))) return false;
            }
        }

        aStack.pop()
        bStack.pop()
        return true;
    }
}