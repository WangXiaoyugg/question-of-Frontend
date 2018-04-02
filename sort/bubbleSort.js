/**
 * 冒泡排序，两两比较相邻纪录的关键字，如果反序就交换，直到没有反序的纪录为止
 */

 function swap(arr, i, j) {
     let temp = arr[i]
     arr[i] = arr[j]
     arr[j] = temp 
}

function bubbleSort1(arr) {
    let i,j
    for(i=0; i< arr.length; i++){
        for(j=i+1;j <= arr.length ;j++){
            if(arr[i] > arr[j]){
                swap(arr, i, j)
            }
        }
    }
} 

const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]
// bubbleSort1(arr)
// console.log(arr); 

function bubbleSort2(arr) {
    let i,j
    for(i=0; i< arr.length; i++){
        for(j=arr.length - 1; j >= i ;j--){ //从后往前查
            if(arr[j] > arr[j+1]){ // 前者比后者大，交换
                swap(arr, j, j+1)
            }
        }
    }
} 

// bubbleSort2(arr)
// console.log(arr); 

// 优化, 加flag
function bubbleSort3(arr) {
    let i,j;
    let flag = true;
    for(i = 0; i<arr.length && flag; i++){ // flag 为true,退出循环
        flag = false;
        console.log('外层循环第'+i+'次');
        for(j = arr.length -1;j>=i;j--){ 
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                flag = true;
            }
        }
    }
}

const arr1 = [2,1,3,4,5,6,7,8,9]
bubbleSort3(arr1)
console.log(arr1);