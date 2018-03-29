const arr = [1,2,3]
for(const item of arr){
    console.log(item)
}

const books = [
    {name:"斗破苍穹", author:'天蚕土豆'},
    {name:"朝花夕拾", author:"鲁迅"}
]

for(const {name, author} of books) {
    console.log(`book name: ${name}, author: ${author}`)
}

// 返回对应的数组中的每一个元素与其下标配对的新数组
const arr1 = ['a','b','c']
entries = arr1.entries(); // 返回的是个迭代器
console.log(entries.next().value); 
console.log(entries.next().value); 
console.log(entries.next().value); 

for(const [index, {name, author}] of books.entries()) {
    console.log(`index:${index}, name: ${name}, author:${author}`)
} 
