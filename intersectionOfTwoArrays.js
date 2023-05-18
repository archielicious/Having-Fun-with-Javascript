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
    
//     let map=new Map()
//     // for (let i=0; i<n; i++){
//     for (let i of nums1){
//         // map.set(nums1[i], (map.get(nums1[i]) || 0)+1)
//         map.set(i, (map.get(i) || 0)+1)
//     }
//     let result=[]
//     // for (let j=0; j<m; j++){
//     for (let j of nums2){
//         // if (map.has(nums2[j]) && map.get(nums2[j])>0){
//         if (map.has(j) && map.get(j)>0){
//             // result.push(nums2[j])
//             result.push(j)
//             // map.set(nums2[j], map.get(nums2[j])-1)
//             map.set(j, map.get(j)-1)
//         }
    }
//     return result.sort((a, b)=>a-b)
    
// }

// in array, to traverse i of name[array] can be used, so instead of writing name[array][i] only i can be used
