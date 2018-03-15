var slice = Array.prototype.slice

// guard 参数允许它在map下起作用
_.initial = function(array,n,guard){
    return slice.call(array,0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}