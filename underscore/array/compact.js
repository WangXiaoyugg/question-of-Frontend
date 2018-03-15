function compact(array){
    let ret = []
    for(var i=0;i<array.length;i++){
        if(array[i]){
           ret.push(array[i])     
        }
    }
    return ret;
}