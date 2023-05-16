function cyclicRotation(n, arr, k) {
    // for (let i=1; i<=k; i++){
    //     arr.unshift(arr.pop())
    // }
    // return arr

    if (k < n) {
        let arrAdd = arr.splice(n - k)
        return arrAdd.concat(arr)
    }
    else{
        let arrAdd=arr.splice(n-k%n)
        return arrAdd.concat(arr)
    }
   
//     let ans=new Array(n);
//     for (let i = n-1; i >=0; i--) {
//         let new_pos = (i + k)%n;
//         ans[new_pos] = arr[i];
//     }
//     return ans;
}
