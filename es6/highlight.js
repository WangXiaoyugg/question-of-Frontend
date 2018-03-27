/**
 * .highlight {color: red;}
 */

 /**
  * 标签模板 [http://es6.ruanyifeng.com/#docs/string]
  * alert`123` => alert(123)
  * let a = 5;
  * let b = 10;
  * alert`a + b = ${a + b} a * b = ${a * b}`;
  * tag(['a','+','b','=','a','*','b','='],15,50)
  */

const highlight = (strings, ...args) => {
     return strings.reduce((str,cur,i) => {
        return `${str}${cur}${ args[i] ? `<span class="highlight">${args[i]}</span>`:''}` 
     },'')
 }