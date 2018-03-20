/**
 * uniqueRandom(min,max)
 * return function, call the function will return a random number nerver the same as the previous
*/

module.exports = function(min,max) {
    if(!min || !max){
        throw new Error('min max can"t omit')
    }

    if(typeof min !== 'number' || typeof max !== 'number'){
        throw TypeError('min max must be a number')
    }

    // 保存前一个随机数
    let prev;

    return function rand(){
        let number = Math.floor( Math.random() *(max - min + 1) + min);
        // 新产生的随机数是否前一个相等,并且最小不等于最大，rand()再次执行，否则就是新产生的随机数
        prev = (number === prev && min !== max) ? rand():number;
        
        return prev;
    }
}
