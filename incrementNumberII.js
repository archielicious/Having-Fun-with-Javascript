function incrementNumberII(N, A) {
    let carry=1
    for (let i=N-1; i>=0; i--){
        let digit=A[i]+carry
        if (digit>=10){
            carry=1
        }
        else{
            carry=0
        }
        digit=digit%10
        A[i]=digit
    }
    if (carry===1){
        A.unshift(1)
    }
    return A
}
