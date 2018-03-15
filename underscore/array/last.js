var slice = Array.prototype.slice

function last(array,n) {
    if(n == null){
        return array[array.length -1]
    } else {
        // slice(3,5);
        return slice.call(array,array.length - n,array.length);
    }
}