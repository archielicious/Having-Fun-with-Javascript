function capitalise(paragraph) {
  let str=paragraph
  let strCopy=""
  let differenceAscii="a".charCodeAt(0)-"A".charCodeAt(0)
  for (let i=0; i<str.length; i++){
    if (i>0 && str[i-1]===" " && str[i]>="a" && str[i]<="z" || i===0 && str[i]>="a" && str[i]<="z"){
      let letterAscii=str[i].charCodeAt(0)-differenceAscii
      strCopy+=String.fromCharCode(letterAscii)
    }
    else{
      strCopy+=str[i]
    }
  }
  return strCopy
}
