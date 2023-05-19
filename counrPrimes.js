function countPrimes(n) {
    let count = 0
    let primes=[]
    for (let i = 2; i <= n; i++) {
        let flag = "not found"
        for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                flag = "found"
                break
            }
        }
        if (flag === "not found") {
            count += 1
            primes.push(i)
        }
    }
    console.log("The prime numbers are", primes)
    return count;
}
