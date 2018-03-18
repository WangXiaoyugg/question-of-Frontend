// NaN 是数字类型 并且自己不等于自己， 
// 把非数字的用 + 转换
_.isNaN = (obj) => {
    return isNumber(obj) && obj !== +obj;
}

isNaN = (obj) => isNumber(obj) && obj !== +obj;
isNumber = (obj) => {
    return typeof obj === 'number' || toString.call(obj) === '[object Number]';
}