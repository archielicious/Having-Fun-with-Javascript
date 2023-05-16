function distinctNumbers(n,nums) {
    // let numSet=new Set(nums)
    // let count=0
    // for (let i of numSet.values()){
    //     count+=1
    // }
    // return count

    // return numSet.size

    let numsObject={}
    for (let i=0; i<n; i++){
        if (!numsObject[nums[i]]){
            numsObject[nums[i]]=1
        }
        else{
            numsObject[nums[i]]+=1
        }
    }
    return Object.keys(numsObject).length
}
