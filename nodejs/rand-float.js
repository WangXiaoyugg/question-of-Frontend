/*
    randFloat(max) return an float from 0 to max
    randFloat(min,max) return an float from min to max  
*/

module.exports = (min,max) => {
    if(max == null) {
        max = min;
        min = 0;
    }

    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('min max must be a number')
    }

    return Math.random() * (max - min) + min;
}