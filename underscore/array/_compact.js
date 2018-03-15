_.identity = function(value){
    return value;
}
 var optimizeCb = function(func, context, argCount) {
     // _.each回调执行到这一步结束
    if (context === void 0) return func; //filter 执行到这一步结束
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };


var cb = function(value,context,argCount) {
    if(value == null) return _.identity(value)
   //filter执行是function的优化
    if(_.isFunction(value)) return optimizeCb(value,context,argCount)     

    if(_.isObject(value)) return _.matcher(value)
   
    return _.property(value)

}

_.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    // 类似数组对象，_.compact执行类数组
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        //执行 _.each 的回调
        iteratee(obj[i], i, obj);
      }
    }
    // 非类数组对象 
    else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

// obj 就是 array;
_.filter = _.select = function(obj,predicate,context) {
    var results = [];
    predicate = cb(predicate,context); //优化
    _.each(obj,function(value,index,list){
        if(predicate(value,index,list)){ //返回value值的真假
            results.push(value)
        }
    })
    return results;    

}

_.compact = function(array){
    return _.filter(array,_.identity)
}


