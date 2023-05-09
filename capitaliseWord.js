function capitalise(word){
  let str=word
  let strCopy=""
  let difference="a".charCodeAt(0)-"A".charCodeAt(0)
  for (let i=0; i<str.length; i++){
    if (str[i]>="a" && str[i]<="z"){
      strCopy+=String.fromCharCode(str[i].charCodeAt(0)-difference)
    }
    else{
      strCopy+=str[i]
    }
  }
  return strCopy
}
