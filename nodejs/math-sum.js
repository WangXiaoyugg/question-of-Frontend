"use strict"
module.exports = function(x){
    // 参数是否是array
    x = Array.isArray(x) ? x : arguments;
    let sum = 0    
    for(let i = 0; i < x.length; i++){
        sum += x[i]
    }
    return sum;
}