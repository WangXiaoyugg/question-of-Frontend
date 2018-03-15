function flatten(array,shallow){
    let results = [];
    if(array == null) return void 0
    if(shallow){
        for(var i =0,l=array.length;i<l;i++){
            if(Array.isArray(array[i])){
                for(var j =0;j<array[i].length;j++){
                    results.push(array[i][j])
                }    
            }else {
                results.push(array[i])
            }
            
        }
    } else {
        for(var i =0,l=array.length;i<l;i++){
            if(Array.isArray(array[i])){
                // 递归最难理解
               results = results.concat(flatten(array[i]))  
            }else {
                results.push(array[i])
            }
            
        }
    }
    return results;    
}