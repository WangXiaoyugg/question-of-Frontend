// 对象深度不可变， 如果对象套对象

Object.deepFreeze = function(obj) {
    
    // 获取对象定义的所有属性名
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name){
        var prop = obj[name]

        //如果属性是对象递归
        if(typeof prop == 'object' && prop !== null)
            Object.deepFreeze(prop)
    
    })

    return Object.freeze(obj);
}


const o1 = Object.deepFreeze({
    a :{
        b: 1
    }
})