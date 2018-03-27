/**
 * 交换两个类, a,b 为两个类, 不改变原型
 * http://es6.ruanyifeng.com/?search=getPrototypeof&x=17&y=8#docs/object#__proto__%E5%B1%9E%E6%80%A7%EF%BC%8CObject-setPrototypeOf%EF%BC%8CObject-getPrototypeOf
 */

 const exchange = (a,b) => {
     const protos = [a, b].map(o => Object.getPrototypeOf(o));// 获取两个类的原型
     [b, a].forEach((o, i) => Object.setPrototypeOf(o, protos[i]))
 }
  
 
 const exchange = (a, b) => {
     const getProto = (o) => Object.getPrototypeOf(o);
     const setProto = (o, prototype) => Object.setPrototypeOf(o,prototype)
     const aProto = getProto(a)
     setProto(a,getProto(b));
     setProto(a, aProto);
 }

