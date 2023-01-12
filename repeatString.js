function repeatString(str, k){
  let newStr=''
  let i=1
  if(k>0){
    while(i<=k){
    newStr=newStr+str
    i=i+1
    }
    return newStr
  }
  else{
    return newStr
  }
}
