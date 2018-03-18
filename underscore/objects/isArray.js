_.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]'
}

var nativeIsArray = Array.isArray;