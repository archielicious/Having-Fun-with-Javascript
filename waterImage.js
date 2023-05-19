function waterImage(matrix){
    let row=matrix.length
    let col=matrix[0].length
    // if (row%2!==0){
        for (let i=0; i<Math.floor(row/2); i++){
            for (j=0; j<col; j++){
                let temp=matrix[row-i-1][j]
                matrix[row-i-1][j]=matrix[i][j]
                matrix[i][j]=temp
            }
        }
    // }
    // else if (row%2==0){
    //     for (let i=0; i<Math.floor(row/2); i++){
    //         for (let j=0; j<col; j++){
    //             let temp=matrix[row-i-1][j]
    //             matrix[row-i-1][j]=matrix[i][j]
    //             matrix[i][j]=temp
    //         }
    //     }
    // }
    return matrix
}
