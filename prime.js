function checkForPrime(n) {
  for(i=2;i<=Math.floor(n/2);i=i+1){
    if(n%i===0){
      return false
    }
  }
  return true
}
