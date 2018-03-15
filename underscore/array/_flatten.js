_.flatten = function(array,shadow){
    return flatten(array,shadow,false)
}
//用 void 0 代替 undefined 避免 undefined 被重写等一些小技巧
var flatten = function(input,shadow,strict,startIndex) {
    var output = [], idx = 0;
    for(var i=startIndex||0, length=getLength(input);i<length;i++){
        var value = input[i]
        
        if(isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {

            if(!shadow) value = flatten(value,shadow,strict)
           
            var j = 0, len = value.length;
            output.length += len;
            while(j < len){
                output[idx++] = value[j++];

            }    
                
        } else if (!strict) {
            output[idx++] = value;
        }
    }
    return output;
}