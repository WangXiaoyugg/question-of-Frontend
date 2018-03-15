var slice = Array.prototype.slice
_.last = function(array,n,guard) {
    if(array == null) return void 0;
    if(n == null || guard) return array[array.length - 1]
    return _.rest(array, Math.max(0,array.length - n))    
}

_.rest = _.tail = _.drop = function(array,n, guard){
    return slice.call(array,n == null || guard ? 1 : n)
}