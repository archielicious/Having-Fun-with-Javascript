function reverseString(str){
  a=[]
  for(i=(str.length-1);i>=0;i=i-1){
    a.push(str[i])
  }
  b=a.join('')
  return b
}
