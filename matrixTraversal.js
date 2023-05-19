function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
    let row = matrix.length
    let coloumn = matrix[0].length
    let current = matrix[currPosRow][currPosCol]
    let arr = []
    for (let i = 1; i <= stepsToMove; i++) {
        if (stepsToMove <= row - 1 || stepsToMove <= coloumn - 1) {
            if (dirToMove === 1) {
                currPosCol += 1
            }
            else if (dirToMove === 2) {
                currPosRow += 1
            }
            else if (dirToMove === 3) {
                currPosCol -= 1
            }
            else if (dirToMove === 4) {
                currPosRow -= 1
            }
            arr.push(matrix[currPosRow][currPosCol])
        }
        else{
            return [-1]
        }

    }
    return arr;
}
