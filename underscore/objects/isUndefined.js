// 防止undefined 被改写
_.isUndefined = function(obj){
    return obj === void 0;
}

isUndefined = obj  => obj === void 0