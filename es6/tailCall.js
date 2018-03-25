// 尾递归优化 阶乘

function factorial(n,total = 1){
    "use strict"
    if(n <= 1) return total;
    return factorial(n - 1, total * n);
}