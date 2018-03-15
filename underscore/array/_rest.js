_.rest = _.tail = _.drop = function(array,n, guard) {
    return [].slice.call(array,n == null || guard ? 1:n)    
}