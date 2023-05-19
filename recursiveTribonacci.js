function recursiveTribonacci(n) {
  if (n===0){
    return 0
  }
  else if(n===1 || n===2){
    return 1
  }
  return recursiveTribonacci(n-1)+recursiveTribonacci(n-2)+recursiveTribonacci(n-3)
}
