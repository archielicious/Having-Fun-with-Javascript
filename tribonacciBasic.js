function tribonacciBasic(n) {
    let i=0
    let j=1
    let k=1
    if (n===0){
        return i
    }
    else if(n===1){
        return j
    }
    else{
        for (let y=3; y<=n; y++){
        let final=i+j+k
        i=j
        j=k
        k=final
    }
    return k
    }
}

// for tribonacci sequence with index starting from 1 instead of 0, following changes will be required, in line 5 the condition will be n===1, in line 8 n===2 and in line 12 y===4
