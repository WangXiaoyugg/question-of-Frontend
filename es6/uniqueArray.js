const unique = (arr) => [...new Set(arr)];

const unique = (arr) => {
    let result = []
    
    arr.forEach((e, idx, arr) => {
        if(idx === arr.indexOf(e)){
            result.push(e)
        }
    })

    return result;
}