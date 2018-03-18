// 对象中是否包含 属性的值和values键值对
_.isMatch = function(obj, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    
    // 如果 object 为空
    // 根据 attrs 的键值对数量返回布尔值
    if(object == null) return !length;
    
    var obj = Object(object)
    
    // obj 有没有attrs 对象的某个key
    // obj,attr 相同key的值是否相等
    for(var i=0; i < length; i++){
        var key = keys[i]
        if(attrs[i] !== obj[key] || !(key in obj)){
            return false;
        } 
    }
    return true;
}