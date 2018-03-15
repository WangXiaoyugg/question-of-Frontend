const _ = {};
const p = console.log;

_.first = function(array, n) {
    console.log(arguments);
    let length = arguments.length;
    if(array == null) return void 0;
    if(length === 1){
        return array[0];
    } else {
        return array.silce.call(array,0,n);
    }
}

let fisrtRet = _.first([5, 4, 3, 2, 1]);
p(fisrtRet);