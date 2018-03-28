/**
 * document.getElementByTagName('*') 获取所有标签
 * 用数组遍历返回 nodeName
 * new Set 去重 
 */
const getPageTags = () => [... new Set([document.getElementsByName('*')].map(value => value.nodeName))]

// es5 写法
var getPageTags = function () {
    var doms = document.getElementsByTagName('*')
    var result = [];
    [].forEach.call(doms,function(node){
        if(!~result.indexOf(node.tagName)){
            result.push(node.tagName)
        }
    })
    return result;
}

// 递归写法
const getPageTags = () => {
    let root = document.documentElement; // 返回html页面 标签
    let childNodes = root.children;
    let queue = [];
    queue.push(root);
    let result = [];
    while(queue.length !== 0) {
        let node = queue.shift();
        result.push(node.nodeName.toLocaleLowerCase());
        let childs = node.children;
        queue.push(...childs)
    }
    result = new Set(result);
    return result;
}