// left pad  往左侧填充空格
const  p = console.log;

// function leftPad(str,len,ch) {
//     str = str.toString();
//     len = len - str.length;

//     if(len < 0) return str;

//     if(!ch && ch !== 0) ch = ' '
//     ch = ch.toString();

//     while(len--){
//       str = ch + str;
//     }
//     return str;
// }

p(leftPad("foo", 5));
p(leftPad("foobar", 6));


var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];

function leftPad(str, len, ch) {
    str = str + '';
    len  = len - str.length;

    if(len <= 0) return str;

    if(!ch && ch !== 0) ch = ' ';
    ch = ch + '';

    if( ch === ' ' && len < 10) {
        return cache[len] + str;
    }

    let pad = ''
    while(true) {

        if (len & 1) pad = pad + ch

        len >>= 1;
        if(len) ch += ch;
        else break    
    }

    return pad + str;
}


