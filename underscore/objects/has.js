// 判断对象中是否有指定的key
// hasOwnProperty 不会继承原型的属性
_.has = function(obj,key) {
    return !_.isNull(obj) && hasOwnProperty.call(obj, key); 
}

_.isNull = function(obj){
    return obj === null
}

