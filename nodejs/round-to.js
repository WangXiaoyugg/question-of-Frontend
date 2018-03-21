/**
 *  roundTo(value, percision) Math.round()
 *  roundTo.up(value, percison) Math.ceil()
 *  roundTo.down(value, percison) Math.floor() 
 */
module.exports = round.bind(null, 'round');
module.exports.up = round.bind(null,'ceil');
module.exports.down = round.bind(null, 'floor');

function round(fn, val, precison) {
    if(typeof val !== 'number') {
        throw new TypeError("Expected value to be a number")
    }

    if (!Number.isInteger(precison)) {
        throw new TypeError("Expected precision to be an integer")
    }

    // 2e2 = 2 * 100 => e2 => 100
    // Math.sign 返回符号位 >0 +1,  <0 -1, 0 = 0
    // 先将小数点右移round 四舍五入后，在将小数点左移指定presion
    const exponent = precison > 0 ? "e":'e-';
    const exponentNeg = precison > 0 ? 'e-':'e';
    precison = Math.abs(precison);

    if (fn === 'round') {
        return Number(Math.sign(val) * (Math.round(Math.abs(val)+exponent+precison) + exponentNeg + precison))

    }
     // 先放大presion倍,在缩小presion倍
    return Number(Math[fn](val + exponent + precison) + exponentNeg + precison)
}