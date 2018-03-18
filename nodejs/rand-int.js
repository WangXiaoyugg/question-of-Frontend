// randInt(max) from 0 to max
// min 
// type number 
// default 0
// max number
// default 1
// randInt(min,max) from min to max

'use strict'
module.exports = function(min,max) {
    if (max === undefined){
        max = min;
        min = 0;
    }

    // 检查min, max 是否为number类型
    if(typeof min !== 'number' || typeof max !== 'number' || max !== '[object Number]' || min !== '[object Number]') {
        throw new TypeError('Expected all arguments to be numbers')
    }

    // [min,max] 区间的随机整数 (max-min +1) * Math.random() + min
    return Math.floor(Math.random() * (max - min + 1) + min);
}