function findFactorial(n) {
  let factorial=n
  if(n!==0){
    for(i=n-1;i>0;i=i-1){
    factorial=factorial*i
    }
  return factorial
  }
  else{
    return 0
  }
}
