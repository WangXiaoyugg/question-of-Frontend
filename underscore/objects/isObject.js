// 对象包括 函数， 对象，排除 null
_.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj
}