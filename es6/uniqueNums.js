/**
 * 
 * @param {n} n <= 31 的数，要求生成 [2 - 32]的随机整数，不能重复
 * 思路 就是先生成[2-32]的有序整数，通过随机排序实现 
 */ 
const uniqueNums = (n) => {
    return [...new Array(31).keys()].map(i => i + 2).sort(() => Math.random() - Math.random()).slice(0, n)
}

// 通过删除原数组的长度实习
const uniqueNums = (n) => {
    const arr = [...Array(31).keys()].map(i => i + 2)
    const result = [];
    while(result.length < n && arr.length){
        const index = Math.floor(arr.length * Math.random());
        result.push(arr[index]);
        arr.splice(index, 1)
    }
    return result;
}

// set 实现,最优雅
const uniqueNums = (n) => {
    let set = new Set();
    while(set.size < n) {
        set.add(Math.floor(2 + Math.random() * 31))
    }
    return [...set]
}