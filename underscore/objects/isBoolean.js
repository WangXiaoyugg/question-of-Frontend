_.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) ===  '[object Boolean]'    
}

isBoolean = (obj) => {
    return typeof obj === 'boolean' || toString.call(obj) === `[object Boolean]`
}