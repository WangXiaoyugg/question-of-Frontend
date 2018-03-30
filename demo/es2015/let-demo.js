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


/**
 * 伪代码，以JOSNP 为例
 */
JSONP('http://www.baidu.com/query',{
    data:{
        tags:'girl',
        tagsMode:'sex',
        format:'json'
    },
    callback(data){
        console.log(data)
    }
})


// 用const 重构
const JSONP = (function(){
    const global = window
    const defaultOptions = Object.freeze({
        data: {},
        callback:(data) => {}
    })
    
    // 过滤用户输入，避免xss输出
    function safeEscape(str){
        return encodeURIComponent(str.toString());
    }

    // todo
})()

function getData(){
    return  (root, opts = defaultOptions) => {
        let url = root.trim().replace(/\?$/,'') + '?'
        const keys = Object.keys(opts.data);
        
        for (const key of keys) {
            url += `${safeEscape(key)}=${safeEscape(opts.data[key])}&`
        }

        const callbackName = `json${Math.random().toString().substr(2)}`

        global[callbackName] = function(data){
            delete global[callbackName];
            opts.callback.call(JSONP, data);
        }

        url += `jsoncallback=${callbackName}`

        const script = document.createElement('script')
        script.src = url

        document.getElementsByTagName('body')[0].appendChild(script)
    }
}
