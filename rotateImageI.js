function rotateImage(matrix) {
    let newMatrix=new Array(matrix[0].length)
    for (let i=0; i<newMatrix.length; i++){
        newMatrix[i]=new Array(matrix.length)
    }
    let row=matrix.length
    let col=matrix[0].length
    for (let j=col-1; j>=0; j--){
        for (let i=0; i<row; i++){
            newMatrix[col-j-1][i]=matrix[i][j]
        }
    }
    return newMatrix
}
