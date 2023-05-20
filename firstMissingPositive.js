function firstMissingPositive(n, arr) {
    let isPresent=new Array(n+1)
    for (let i=0; i<n; i++){
        if (arr[i]>=1 && arr[i]<=n){
            isPresent[arr[i]]=true
        }
    }
    for (let i=1; i<=n; i++){
        if (!isPresent[i]){
            return i
        }
    }
    return n+1
}
