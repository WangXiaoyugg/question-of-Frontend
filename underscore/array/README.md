# 数组的函数

> 所有的数组的函数对 arguments 伪数组有效，但是，underscore
> 的函数对稀疏数组失效 

- first
_.first(array, [n]), 别名: head ,take，
返回数组的第一个元素，如果传递n会返回第1个到n 个之间的数组

- initial
_.initial(array,[n]),
返回所有元到n的数组，除了数组的最后一位默认
传递n，在数组去除从最后一位开始的n位元素，倒着删除原数组的n位元素

- last
_.last(array,[n])
返回数组的最后一个元素，
传递n，返回数组最后一位开始的第n个元素的数组

- rest
_.rest(array,[index]), 别名:tail,drop
返回数组的剩余元素数组，默认去除第1个
传递n, 返回数组的索引开始到最后一个元素的数组

- compact
_.compact(array),
返回一个数组，去除原数组的falsy值(false,null,0,'',undefined,NaN)

- flatten
_.flatten(array,[shallow])
扁平化内嵌数组，无论内嵌多少层，返回一维数组
若传递shallow为true,只会是浅度扁平化，只会扁平化一次

- without
_.without(array,*value)
返回数组里没有被移除值的数组

- union
_.union(*arrays)
返回传递数组的并集

