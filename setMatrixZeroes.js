function setMatrixZeroes(matrix) {
    let row=matrix.length
    let col=matrix[0].length
    let rowSet=new Set()
    let colSet=new Set()
    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){
            if (matrix[i][j]==0){
                rowSet.add(i)
                colSet.add(j)
            }
        }
    }
    for (let k of rowSet.values()){
        for (let j=0; j<col; j++){
            matrix[k][j]=0
        }
    }
    for (let k of colSet.values()){
        for (let i=0; i<row; i++){
            matrix[i][k]=0
        }
    }
    return matrix
}
