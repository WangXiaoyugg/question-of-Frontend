// 两次取反转换为 布尔值, 
// 元素的节点的nodeType 为1 
_.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
}