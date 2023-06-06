function removeDuplicatesFromSortedArrayII(n, nums) {
    // let length=1
    // let count=1
    // for (let i=1; i<n; i++){
    //     if (nums[i]===nums[i-1]){
    //         count+=1
    //         if (count>2){
    //             continue
    //         }
    //         else if(count<=2){
    //             length+=1
    //         }
    //     }
    //     else{
    //         count=1
    //         length+=1
    //     }
    // }
    // return length

    let index=1
    let count=1
    for (let i=1; i<n; i++){
        if (nums[i]==nums[i-1]){
            count+=1
        }
        else {
            count=1
        }
        if (count<=2){
            nums[index]=nums[i]
            index+=1
        }
    }
    return {newLength:index, newArr:nums}
}
