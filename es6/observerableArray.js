class ObserverableArray extends Array {
    push(...args) {
        console.log('push')
        return super.push(...args)
    }

    reverse(...args){
        console.log('reverse')
        return super.reverse(...args)
    }

    unshift(...args){
        console.log('unshift')
        return super.unshift(...args)
    }

    sort(...args){
        console.log('sort')
        return super.sort(...args)
    }

    splice(...args){
        console.log('splice')
        return super.splice(...args)
    }

    pop(...args){
        return super.pop(...args)
    }

    shift(...args){
        return super.shift(...args)
    }
}