// is 的类型判断 
// isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
_.each(['Arguments','Function','String','Number','Date','RegExp','Error'],function(name){
    _['is'+name] = function(obj) {
        return toString.call(obj) === '[object '+ name +']';
    }
})

(function(){
    const _ = {};
    const typeDict = ['Arguments','Function','String','Number','Date','RegExp','Error'];
    for(let i = 0, len = typeDict.length; i < len; i++){
        _[`is${typeDict[i]}`]  = (obj) => {
            return toString.call(obj) === `[object ${typeDict[i]}]`
        }
    }
    
    return _;
})()