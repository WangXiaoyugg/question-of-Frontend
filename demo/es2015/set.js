// set 无序的无重复元素的集合
// set api  add,delete clear, forEach, has

const set = new Set();

set.add(1)
set.add(2)
set.add(3)

console.log(set)

set.delete(2)
console.log(set)

set.clear()
console.log(set)

set.has(1)
set.forEach(item => console.log(item))
set.forEach(item => console.log(item * this.foo), {foo: 2})

for (const val of set) {
    console.log(val)
}

