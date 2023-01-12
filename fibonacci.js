function findFibonacci(n) {
  lst=[0,1]
  for(i=3;i<=n;i=i+1){
    lst.push(lst[lst.length-1]+lst[lst.length-2])
  }
  return lst[n-1]
}
