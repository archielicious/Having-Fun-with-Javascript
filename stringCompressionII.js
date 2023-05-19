function stringCompressionII(s) {
  let result=""
  let count=1
  for (let i=0; i<s.length; i++){
    let current=s[i]
    let next=s[i+1]
    if (current===next){
      count+=1
    }
    else{
      result+=current+String(count)
      count=1
    }
  }
  return result.length<s.length ? result : s 

}
