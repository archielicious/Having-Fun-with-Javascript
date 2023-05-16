function printAnySpiralMatrix(n,m) {
    let arr=new Array(n)
    for (let i=0; i<n; i++){
        arr[i]=new Array(m)
    }
    let count=1 
    let top=0
    let right=m-1
    let bottom=n-1
    let left=0
    while (count<=n*m){
        for (let i=left; i<=right; i++){
            arr[top][i]=count
            count+=1
        }
        top+=1
        for (let i=top; i<=bottom; i++){
            arr[i][right]=count
            count+=1
        }
        right-=1
        for (let i=right; i>=left; i--){
            arr[bottom][i]=count
            count+=1
        }
        bottom-=1
        for (let i=bottom; i>=top; i--){
            arr[i][left]=count
            count+=1
        }
        left+=1
    }
    return arr
}
