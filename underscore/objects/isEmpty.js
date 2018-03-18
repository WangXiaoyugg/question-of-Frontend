// obj 为 数组，对象，字符串，是否为空
// 空对象自身没有可举的熟悉

_.isEmpty = function(obj) {
    // 对象为 null
    if(obj === null) return true;
    // 对象是类数组，并且是array, 字符串， arguments 中的一种
    // 它的length 为 0；
    if(isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) {
        return obj.length === 0
    }
    // 对象
    return _.keys(obj).length === 0;
}

const MAX_ARRAY_INDEX = Math.pow(2,53) -1 ;
const navtiveKeys = Object.keys;
const property = function(key) {
    return function(obj){
        return obj === null ? void 0 : obj[key];
    }
}
const getLength = property('length');

const isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

// 返回一个对象keys 组成的数组
_.keys = function(obj) {
    // 处理参数错误
    if(!_.isObject(obj)) return [];

    // 浏览器支持原生的_.keys
    if(navtiveKeys) return navtiveKeys(obj);

    let keys = []
    for (let key in obj) {
        if(_.has(obj,key)){
            keys.push(key)
        }
    }

    // IE < 9 下不能用 for in 来枚举某些 key 值
    // 传入 keys 数组为参数
    // 因为 JavaScript 下函数参数按值传递
    // 所以 keys 当做参数传入后会在 `collectNonEnumProps` 方法中改变值
    if(hasEnumBug) collectNonEnumProps(obj,keys);
    
    return keys;

}

  var ObjProto = Object.prototype;
 
  // IE < 9 下 不能用 for key in ... 来枚举对象的某些 key
  // 比如重写了对象的 `toString` 方法，这个 key 值就不能在 IE < 9 下用 for in 枚举到
  // IE < 9，{toString: null}.propertyIsEnumerable('toString') 返回 false
  // IE < 9，重写的 `toString` 属性被认为不可枚举
  // 据此可以判断是否在 IE < 9 浏览器环境中
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');


  // IE < 9 下不能用 for in 来枚举的 key 值集合
  // 其实还有个 `constructor` 属性
  // 个人觉得可能是 `constructor` 和其他属性不属于一类
  // nonEnumerableProps[] 中都是方法
  // 而 constructor 表示的是对象的构造函数
  // 所以区分开来了
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];


  // obj 为需要遍历键值对的对象
  // keys 为键数组
  // 利用 JavaScript 按值传递的特点
  // 传入数组作为参数，能直接改变数组的值
function collectNonEnumProps(obj,keys) {
    let nonEnumIdx = nonEnumerableProps.length;
    let constructor = obj.constructor;

    //获取对象的原型
    // 如果 obj 的 constructor 被重写
    // 则 proto 变量为 Object.prototype
    // 如果没有被重写
    // 则为 obj.constructor.prototype
    let proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto

    // Constructor is a special case.
    // `constructor` 属性需要特殊处理 (是否有必要？)
    // 如果 obj 有 `constructor` 这个 key
    // 并且该 key 没有在 keys 数组中
    // 存入 keys 数组
    let prop = 'constructor';
    if(_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while(nonEnumIdx--){
        prop = nonEnumerableProps[nonEnumIdx]

        //  obj[prop] !== proto[prop] 判断该 key 是否来自于原型链
        if(prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)){
            keys.push(prop)
        }
    }
}

