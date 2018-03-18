function intersection() {
    let args = [].slice.call(arguments,0)
    let flatArr = [];
    let argCount = args.length;
    
    // flatten 数组只支持二维
    for(var i=0;i<args.length;i++){
        for(var j=0;j<args[i].length;j++){
            flatArr.push(args[i][j])
        }
    }

    // 找交集，也就是出现的次数 >= argCOunt
    let dict = {}; // 存储flatten 数组每个元素的出现次数    
    for(var k=0; k<flatArr.length;k++){
        let key = flatArr[k]
        if(!dict[key]){
            dict[key] = 1;
        } else {
            dict[key]++;
        }
    }

    //  遍历词典，找出次数大于 argCount的key，放入结果数组, 
    //  问题就是key都是字符串，原数组可能是数字
    let result = [];
    for(var key in dict){
        if(dict[key] >= argCount){
            if(flatArr.indexOf(key) < 0){
                result.push(+key)
            } else {
                result.push(key);
            }
        }
    }

    return result;
}

intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])