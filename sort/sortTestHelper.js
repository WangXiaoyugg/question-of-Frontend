/**
 *  排序辅助函数
 * 
 */

function assert(left,right) {
     if (left >= right) {
        console.error('right must greate than left') 
        return false;
     }
     
     return true;
}
 
 //生成 n 个元素的随机数组， 每个元素的随机范围[left,right];
module.exports = {
     generateRandom : function generateRandom(n, left, right) {
        if(!assert(left, right)) return false;

        let arr = new Array(n)
        for(var i = 0; i < n ; i++) {
            arr[i] = Math.floor(Math.random() * (right - left + 1)) + left;
        }  

        return arr;
    },
    printArray: function printArray(arr, n) {
        let str = ''
        for(var i = 0; i < n; i++) {
            str += arr[i] + ' '
            if(i > 0 & i % 10 == 0) {
                str += arr[i] + '\n'
            }
        }
        console.log(str);
        return;
    }
d}

 
