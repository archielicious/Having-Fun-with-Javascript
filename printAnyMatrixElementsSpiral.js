function printAnyMatrixElementsSpiral(matrix) {
    let arr=[]
    let n=matrix.length
    let m=matrix[0].length
    let top=0
    let right=m-1
    let bottom=n-1
    let left=0
    let result=true
    while (result){
        if (arr.length>=n*m){
            result=false
        }
        for (let i=left; i<=right; i++){
            if (arr.length<n*m){
                arr.push(matrix[top][i])
            }
        }
        top+=1
        for (let i=top; i<=bottom; i++){
            if (arr.length<n*m){
                arr.push(matrix[i][right])
            }
        }
        right-=1
        for (let i=right; i>=left; i--){
            if (arr.length<n*m){
                arr.push(matrix[bottom][i])
            }
        }
        bottom-=1
        for (let i=bottom; i>=top; i--){
            if (arr.length<n*m){
                arr.push(matrix[i][left])
            }
        }
        left+=1
    }
    return arr
}
