/**
 * proxy http://es6.ruanyifeng.com/#docs/proxy
 */

const mike = new Proxy({},{
    set() {console.log(`Don't Touch me`)},
    deleteProperty() {console.log(`Don't touch me`)}
})