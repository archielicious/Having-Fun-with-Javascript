function nthFibonacciNumber(n) {
    let i = 0
    let j = 1
    if (n > 0) {
        for (let k = 2; k <= n; k++) {
            let final = i + j
            i = j
            j = final
        }
        return j
    }
    return i
}

// for fibonacci sequence with index starting from 1 instead of 0, following changes will be required, in line 4 the condition will be n>1, and in line 5 k=3
