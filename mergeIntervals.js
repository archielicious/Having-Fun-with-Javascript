function mergeIntervals(n, intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let st=intervals[0][0]
    let end=intervals[0][1]
    let ans=[]
    for (let i=1; i<n; i++){
        if (end>=intervals[i][0]){
            end=Math.max(end, intervals[i][1])
        }
        else{
            ans.push([st, end])
            st=intervals[i][0]
            end=intervals[i][1]
        }
    }
    ans.push([st, end])
    return ans
}
