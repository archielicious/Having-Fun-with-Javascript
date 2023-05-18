function rotateImageII(matrix) {
    let newMatrix=new Array(matrix[0].length)
    for (let i=0; i<newMatrix.length; i++){
        newMatrix[i]=new Array(matrix.length)
    }
    let row=matrix.length
    let col=matrix[0].length
    for (let j=0; j<col; j++){
        for (let i=row-1; i>=0; i--){
            newMatrix[j][row-i-1]=matrix[i][j]
        }
    }
    return newMatrix
}
