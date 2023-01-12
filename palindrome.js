function checkPalindrome(str){
  lst=[]
  for(i=(str.length)-1;i>=0;i=i-1){
    lst.push(str[i])
  }
  rev=lst.join('')
  if(str===rev){
    return true
  }
  else{
    return false
  }
}
