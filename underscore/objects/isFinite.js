// window.isFinite(val) 值是否是有限值

_.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
}