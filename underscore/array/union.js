function union(){
    let allArrays = [].slice.call(arguments,0);
    let results = [];
    for(var i=0;i<allArrays.length;i++){
        for(var j=0;j<allArrays[i].length;j++){
            results.push(allArrays[i][j])
        }
    }
    console.log(results)
    let temp = [];
    for(var k=0;k<results.length;k++){
        if(temp.indexOf(results[k]) < 0){
            temp.push(results[k])
        }
    }

    return temp;
}