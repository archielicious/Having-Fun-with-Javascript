function div(dividend, divisor) {
    let count = 0
    let remainder
    while (dividend - divisor >= 0) {
    // while (dividend>=divisor){
        remainder = dividend - divisor
        dividend = remainder
        count += 1
    }
    return count
 
    // if (dividend<divisor){
    //     return 0
    // }
    // return 1+div(dividend-divisor, divisor)
}
function divideTwoIntegers(dividend, divisor) {
    if (divisor !== 0 && dividend !== 0) {
        if (divisor < 0 && dividend > 0) {
            divisor = -1 * divisor
            let y = div(dividend, divisor)
            return - 1 * y
        }
        else if (dividend < 0 && divisor > 0) {
            dividend = -1 * dividend
            let y = div(dividend, divisor)
            return - 1 * y
        }
        else if (dividend < 0 && divisor < 0) {
            dividend = -1 * dividend
            divisor = -1 * divisor
            let y = div(dividend, divisor)
            return y
        }
        else if (dividend > 0 && divisor > 0) {
            let y = div(dividend, divisor)
            return y
        }
    }
    else if ((dividend === 0 && divisor === 0) || (dividend !== 0 && divisor === 0)) {
        return NaN
    }
    else {
        return 0
    }
}
