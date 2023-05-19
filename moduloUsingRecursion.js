function mod(a, b) {
        
    // let remainder=a
    // while (a - b >= 0) {
    //     remainder = a - b
    //     a = remainder
    // }
    // return remainder

    if (a<b){
        return a
    }
    return mod(a-b, b)
}
function moduloUsingRecursion(a, b) {
    if (b !== 0 && a !== 0) {
        if (b < 0 && a > 0) {
            b = -1 * b
            let y = mod(a, b)
            return - 1 * y
        }
        else if (a < 0 && b > 0) {
            a = -1 * a
            let y = mod(a, b)
            return - 1 * y
        }
        else if (a < 0 && b < 0) {
            a = -1 * a
            b = -1 * b
            let y = mod(a, b)
            return y
        }
        else if (a > 0 && b > 0) {
            let y = mod(a, b)
            return y
        }
    }
    else if ((a === 0 && b === 0) || (a !== 0 && b === 0)) {
        return -1
    }
    else {
        return 0
    }
}
