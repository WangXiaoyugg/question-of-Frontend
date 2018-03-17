// is_good isGood => s_g sG 
// this_is_my_name => s_i sI
const toCamelCaseVar = (variable) => {
    return variable.replace(/([a-zA-Z])_+?([a-zA-Z])/g,(match,p1,p2) => {
        return p1+p2.toUpperCase()
    })
}