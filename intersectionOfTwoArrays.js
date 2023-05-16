function intersectionOfTwoArrays(n, nums1, m, nums2){
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    let inter=[]
    let i=0
    let j=0
    while (i<n && j<m){
        if (nums1[i]===nums2[j]){
            inter.push(nums1[i])
            i+=1
            j+=1
        }
        else if(nums1[i]<nums2[j]){
            i+=1
        }
        else{
            j+=1
        }
    }
    return inter
}
