var slice = Array.prototype.slice

function rest(array,n){
    if(n == null){
        return slice.call(array,1)
    } else {
        return slice.call(array,n);
    }
}
