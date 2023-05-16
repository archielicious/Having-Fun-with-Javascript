function pascalTriangle(A) {
  let R = [];
  R.push([1]);
  for (let i = 1; i < A; i++) {
    let length = R[i - 1].length;
    R.push([]);
    R[i].push(1)
    for (let j = 1; j < length; j++) {
      R[i].push(R[i - 1][j] + R[i - 1][j - 1]);
    }
    R[i].push(1);
  }
  return R;
// }
