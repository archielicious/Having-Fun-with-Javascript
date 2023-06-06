function twoSumInSortedArray(n, arr, target_sum) {
    let start=0
    let end=n-1
    while (start<end){
        if (arr[start]+arr[end]<target_sum){
            start+=1
        }
        else if(arr[start]+arr[end]>target_sum){
            end-=1
        }
        else {
            return true
        }
    }
    false
}
