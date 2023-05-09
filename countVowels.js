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
function isVowel(letter){
    if (letter==="A" || letter==="E" || letter==="I" || letter==="O" || letter==="U"){
      return true
    }
    else{
      return false
    } 
}
function countVowels(word) {
  // let modifiedWords=word.toUpperCase()
  // let count=0
  // let vowels=["A", "E", "I", "O", "U"]
  // for (let i=0; i<=modifiedWords.length; i++){
  //   if (vowels.includes(modifiedWords[i])){
  //     count=count+1
  //   }
  // }
  // return count
 let capitalisedWord=capitalise(word)
  let count=0
  for (let i=0; i<word.length; i++){
    if (isVowel(capitalisedWord[i])){
      count+=1
    }
  }
  return count
}
