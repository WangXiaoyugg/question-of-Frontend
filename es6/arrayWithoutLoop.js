const arrayWithoutLoop = (n) => [...Array(n).keys()]

const arrWithoutLoop = (n2) => {
var arr = [];
~function(n) {
    if (n < n2) {
        arr.push(n);
        arguments.callee(arr.length);
    }
}(0);
return arr
}

// 递归实现
const arrayWithoutLoop = (length) => {
    let array = Array(length)

    let recursiveFill = (array) => {
        if(!array[length--] && length >= 0) {
            array[length] = length;
            return recursiveFill(array);
        }
    }

    recursiveFill(array);
}