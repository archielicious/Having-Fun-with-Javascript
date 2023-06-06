function twoSum(nums, target) {
    // let map=new Map()
    // let arr=[]
    // for (let i=0; i<nums.length; i++){
    //     if (map.has(target-nums[i])){
    //         arr.push(map.get(target-nums[i]), i)
    //     }
    //     else{
    //         map.set(nums[i], i)
    //     }
    // }
    // // console.log(map)
    // return arr

    let map=new Map()
    let arr=[]
    for (let i=0; i<nums.length; i++){
        if (!map.has(nums[i])){
            map.set(nums[i], i)
        }
    }
    for (let i=0; i<nums.length; i++){
        if (map.has(target-nums[i]) && map.get(target-nums[i])!==i){
            if (i>map.get(target-nums[i])){
                arr.push(map.get(target-nums[i]), i)
            }
            else{
            arr.push(i, map.get(target-nums[i]))
            }
            break
        }
    }
    return arr
    // console.log(map)
    
}
