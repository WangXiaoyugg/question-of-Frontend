/**
 * 用于数组排序的测试
 * 创建数组类，封装常规数组操作的函数
 * @param numbElements;
 * methods: insert,init,setRandom, clear, toString, swap, toString;
 */

function CArray(numbElements){
     this.dataStore = [];
     this.pos = 0;
     this.numbElements = numbElements;
     this.init();
}
  
CArray.prototype.init = function () {
    for(let i = 0; i < this.numbElements; i++){
        this.dataStore[i] = i;
    }
}

CArray.prototype.setRandom = function () {
    for(let i = 0; i < this.numbElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numbElements + 1))
    }
}

CArray.prototype.clear = function () {
    for(let i = 0; i < this.numbElements; i++) {
        this.dataStore[i] = 0;
    }
}

CArray.prototype.insert = function (element) {
    this.dataStore[pos++] = element;
}

CArray.prototype.toString = function() {
    let resultStr = '';
    for(let i = 0; i < this.dataStore.length; i++) {
        resultStr += this.dataStore[i] + ' ';
        if (i > 0 & i % 10 == 0) {
            resultStr += '\n'
        }
    }
    return resultStr;
}

CArray.prototype.swap = function (arr, index1 , index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}   


let numElements = 100;
let myNums = new CArray(numElements);
myNums.setRandom(); 
console.log(myNums.toString());