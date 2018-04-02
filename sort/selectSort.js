// 每次循环在剩下找到最小，放到未排序的第一个位置；
const sortHelper = require('./sortTestHelper');

function selectSort(arr, n) {
    for(var i = 0; i < n; i++) {
        // 寻找 [ i, n) 区间的最小值
        var minIndex = i;
        for(var j  = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr,[i], minIndex);
    }
}

function swap(arr,i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let n = 20;
const arr = sortHelper.generateRandom(n, 0, n);
sortHelper.printArray(arr, n);
selectSort(arr, n);
for(var i = 0; i < n; i++) {
    console.log(arr[i]);
}