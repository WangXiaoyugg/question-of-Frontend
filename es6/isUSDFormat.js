const isUSDFormat = (str) => {
    return /^\$([1-9]\d{0,2}(,\d{3})*?|0)(\.\d{2})?$/.test(str)
}