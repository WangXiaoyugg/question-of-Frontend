
function without(array){
    values = Array.prototype.slice.call(arguments,1);

    let results = []

    for(var i=0,l=array.length;i<l;i++){
        if(values.indexOf(array[i]) < 0){
            results.push(array[i])
        }
    }
    return results;
}