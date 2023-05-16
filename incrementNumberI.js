function incrementNumberI(arr){
    let ans=0
    let carry=1
    let multiple=1
    for (i=arr.length-1; i>=0; i--){
        let digit=arr[i]+carry
        if (digit>=10){
            carry=1
        }
        else{
            carry=0
        }
        digit=digit%10
        ans=ans+digit*multiple
        multiple*=10
    }
    if (carry===1){
        ans=ans+1*multiple
    }
    return ans
}
