_.intersection = function(array) {
    // 结果数组
    var result = [];
    // 传入的参数的个数
    var argsLength = arguments.length;

    // 遍历第一个数组的元素
    for(var i=0,length = getLength(array); i<length;i++){
        
        var item = array[i];

        // 第一个参数数组有了此元素就跳过
        if(_.contains(result,item)) continue;
        
        // 判断其他数组中是否都有item元素
        for(var j=1;j<argsLength;j++){
            if(!_.contains(arguments[j],item)) break;
        }

        // j === argsLength 说明其他数组中都有item元素
        if (j === argsLength) result.push(item);

    }
    return result;
}

var property = function(key) {
    return function(obj){
        return obj == null ? void 0 : obj[key]
    }
}
var getLength = property('length');