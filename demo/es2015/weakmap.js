// weakMap 键会检查变量引用， 引用别删除，键值对
const weakm = new WeakMap()

let keyObject = {id: 1}
const valObject = {score: 100}

weakm.set(keyObject,valObject);
weakm.get(keyObject) // => {score: 100}
keyObject = null;
console.log(weakm.has(keyObject)) // false;
