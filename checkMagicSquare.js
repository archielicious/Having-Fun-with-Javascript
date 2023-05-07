function checkMagicSquare(n, matrix) {
    // let sumArr = []
    // let mainDiagonalSum = 0
    // let diagonalSum = 0
    // let sum=0
    // for (let i = 0; i < n; i++) {
    //     let rowSum = 0
    //     let columnSum = 0
    //     for (let j = 0; j < n; j++) {
    //         rowSum += matrix[i][j]
    //         columnSum += matrix[j][i]
    //     }
    //     sumArr.push(rowSum)
    //     sumArr.push(columnSum)
    // }
    // for (let k=0; k<n; k++){
    //     mainDiagonalSum += matrix[k][k]
    // }
    // for (let k = n - 1; k >= 0; k--) {
    //     diagonalSum += matrix[n-k-1][k]
    // }
    // sumArr.push(mainDiagonalSum)
    // sumArr.push(diagonalSum)
    // for (let i=0; i<sumArr.length; i++){
    //     sum+=sumArr[i]
    // }
    // return (sum===sumArr[0]*sumArr.length)

    let mainDiagonalSum = 0
    let diagonalSum=0
    for (let i=0; i<n; i++){
        mainDiagonalSum += matrix[i][i]
        diagonalSum+=matrix[i][n-i-1]
    }
    if (diagonalSum!==mainDiagonalSum){
        return false
    }
    for (let i = 0; i < n; i++) {
        let rowSum = 0
        let columnSum = 0
        for (let j = 0; j < n; j++) {
            // if (i+j===n-1){
            //     diagonalSum+=matrix[i][j]
            // }
            rowSum += matrix[i][j]
            columnSum += matrix[j][i]
        }
        if (rowSum!==mainDiagonalSum || columnSum!==mainDiagonalSum){
            return false
        }
    }
    // if (diagonalSum!==mainDiagonalSum){
    //     return false
    // }
    return true
}
