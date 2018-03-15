_.union = function(){
                        // input, shadow, strict  
    return _.uniq(flatten(arguments,true,true))
}
// 只传入了array                    
_.uniq = _.unique = function(array,isSorted,iteratee,context) {
    if (!_.isBoolean(isSorted)){
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
    }

    if(iteratee !== null) iteratee = cb(iteratee);

    var result = [];
    var seen = [];
    for(var i=0,length=getLength(array);i<length;i++){
        var value = array[i];
        var computed = iteratee ? iteratee(value,i,array):value;
        // 不走
        if(isSorted){
            if(!i || seen !== computed) result.push(value)
            seen = computed;    
        } else if (iteratee) {
            if(!_.contains(seen,computed)){
                seen.push(computed)
                result.push(value)
            }
        } 
        // 执行这个分支
        else if (!_.contains(result,value)){
            result.push(value)
        }
        return result;
    }
}