var slice = Array.prototype.slice
function initial(array, n){
    if(n == null){
        return slice.call(array, 0, array.length - 1);
    } else {
        return slice.call(array, array.length - n);
    }   
}