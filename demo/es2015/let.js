var foo = function () {
    var local = {}
}
foo()
console.log(local); // undefined

var bar = function () {
    local = {}
}
bar();
console.log(local); // {}


/**
 *  循环绑定事件
 */

 for( i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(e){
        output.innerText = buttons[i].innerText
    })
 }

 // js 变量的回收使用引用计数实现的
 // 闭包的原理是利用高阶函数来产生穿透作用域的引用

 