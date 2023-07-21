function validAnagram(s, t) {
    // let firstMap=new Map()
    // let secondMap=new Map()
    // if (s.length==0 && t==undefined){
    //     return true
    // }
    // else if (t==undefined){
    //     return false
    // }
    // else{
    // for (let i=0; i<s.length; i++){
    //     firstMap.set(s[i], (firstMap.get(s[i]) || 0) + 1)
    // }
    // // console.log(firstMap)
    // for (let j=0; j<t.length; j++){
    //     secondMap.set(t[j], (secondMap.get(t[j]) || 0) + 1)
    // }
    // // console.log(secondMap)
    // if (firstMap.size!==secondMap.size){
    //     return false
    // }
    // for (let [key, value] of firstMap){
    //     let testValue=secondMap.get(key)
    //     if (testValue!==value || (testValue===undefined && secondMap.has(key))){
    //         return false
    //     }
    // }
    // return true
    // }

    if (s.length==0 && t==undefined){
        return true
    }
    else if (t==undefined){
        return false
    }
    let frequency=new Array(26).fill(0)
    for (let i=0; i<s.length; i++){
        frequency[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    for (let j=0; j<t.length; j++){
        frequency[t[j].charCodeAt(0)-'a'.charCodeAt(0)]--
    }
    for (let k=0; k<frequency.length; k++){
        if (frequency[k]!==0){
            return false
        }
    }
    return true
}
