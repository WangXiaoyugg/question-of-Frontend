
function *flatten2(arr) {
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        Array.isArray(item) ? yield *flatten2(item): yield item;
    }
}

// const flatten = (arr) => [...flatten2(arr)]