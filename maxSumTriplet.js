function maxSumTriplet(n, nums) {
    let ans = 0;
    for (let j=1; j<n-1; j++){
        let first=-1
        let third=-1
        for (let i=0; i<j; i++){
            if (nums[i]<nums[j]){
                first=Math.max(first, nums[i])
            }
        }
        for (let k=j+1; k<n; k++){
            if (nums[k]>nums[j]){
                third=Math.max(third, nums[k])
            }
        }
        if (first!==-1 && third!==-1){
            ans=Math.max(ans, first+nums[j]+third)
        }
    }
    return ans;
}
