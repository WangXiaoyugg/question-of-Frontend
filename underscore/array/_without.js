_.without = function(array) {
    return _.difference(array,[].slice.call(arguments, 1))
}

_.difference = function(array){
    // [1,[2,3]]
    var rest = flatten(arguments,true,true,1);
    return _.filter(array,function(value){
        return !_.contains(rest,value)
    })
}

_.contains = _.includes = _.include 
= function(obj,item,fromIndex,guard){
    if(!isArrayLike(obj)) obj = _.values(obj);
    if(typeof fromIndex !== number || guard) fromIndex = 0;
    // fromIndex = 0, obj = rest ,item = array[i];
    return _.indexOf(obj,item,fromIndex) >= 0;
}

_.indexOf = createIndexFinder(1,_.findIndex,_.sortdIndex);

function createIndexFinder(dir, predicateFind, sortedIndex) {
    //  obj, item , 0;
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      // 处理NaN
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      // idx = 0, idx >= 0 && idx < 5,idx += 1
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // 二分查找
   _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };
