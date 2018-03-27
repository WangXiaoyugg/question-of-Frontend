const fillEmpty = (arr) => {
    for(let i =0; i < arr.length; i++){
        if(!(i in arr)) arr[i] = 'hello'
    }
    return arr;
}