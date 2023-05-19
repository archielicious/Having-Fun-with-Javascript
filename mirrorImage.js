function mirrorImage(matrix){
    let row=matrix.length
    let col=matrix[0].length
    if (col%2!==0){
        for (let i=0; i<row; i++){
            for (j=0; j<Math.floor(col/2); j++){
                let temp=matrix[i][col-j-1]
                matrix[i][col-j-1]=matrix[i][j]
                matrix[i][j]=temp
            }
        }
    }
    else if (col%2==0){
        for (let i=0; i<row; i++){
            for (let j=0; j<col/2; j++){
                let temp=matrix[i][col-j-1]
                matrix[i][col-j-1]=matrix[i][j]
                matrix[i][j]=temp
            }
        }
    }
    return matrix
}
