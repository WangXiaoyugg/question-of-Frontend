var slice = Array.prototype.slice;

_.first = _.head = _.take = function(array,n, guard) {
    if(array == null) return void 0;
    if(n == null || guard) return array[0];
    return _.initial(array,array.length - n); // 5 - 1 = 4;
                                              // 5 - 10 = -5; 
                                              // 5 - (-10) = 15; 
}
_.initial = function(array, n, guard) {

    let end = Math.max(0,array.length - (n == null || guard ? 1 : n))
    // 0 , 5 - 4 = 1
    return slice.call(array, 0, end);
}