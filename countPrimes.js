function countPrimes(n) {
    // let count = 0
    // let primes=[]
    // for (let i = 2; i <= n; i++) {
    //     let flag = "not found"
    //     for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
    //         if (i % j === 0) {
    //             flag = "found"
    //             break
    //         }
    //     }
    //     if (flag === "not found") {
    //         count += 1
    //         primes.push(i)
    //     }
    // }
    // console.log("The prime numbers are", primes)
    // return count;

    let prime=new Array(n+1)
    for (let i=0; i<=n; i++){
        prime[i]=1
    }
    for (let i=2; i*i<=n; i++){
        if (prime[i]===1){
            for (let j=i*i; j<=n; j=j+i){
                prime[j]=0
            }
        }
    }
    let primes=[]
    let count=0
    for (let i=2; i<=n; i++){
        if (prime[i]===1){
            primes.push(i)
            count=count+1
        }
    }
    console.log("The primes are", primes)
    return count
}
