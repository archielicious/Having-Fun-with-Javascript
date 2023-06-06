function mergeSortedArray(m, nums1, n, nums2) {
    let idx1=0
    let idx2=0
    let arr=[]
    while(idx1<m && idx2<n){
        if (nums1[idx1]<=nums2[idx2]){
            arr.push(nums1[idx1])
            idx1+=1
        }
        else {
            arr.push(nums2[idx2])
            idx2+=1
        }
    }
    for (let i=idx1; i<m; i++){
        arr.push(nums1[i])
    }
    for (let i=idx2; i<n; i++){
        arr.push(nums2[i])
    }
    return arr
}
