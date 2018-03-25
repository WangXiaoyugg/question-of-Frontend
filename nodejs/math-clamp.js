// 返回（number,min,max)中其中最靠近number的数值

module.exports = function(number,min,max) {
    var result;
    // 检查异常
    if (min > max) {
        throw new RangeError(`'min' should less than 'max'`)
    }

    if(number < min){
        result = min    
    } else if ( number > max) {
        result = max
    }

    return max;
}