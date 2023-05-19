function reverseWordsInAString(s) {
    // let str=s.split(" ")
    // let sentence=""
    // for (let i=str.length-1; i>=0; i--){
    //     if (i===0){
    //         sentence+=str[i]
    //     }
    //     else{
    //     sentence+=str[i]+" "
    //     }
    // }
    // return sentence

    let ans=""
    for (let i=s.length-1; i>=0; i--){
        if (s[i]!==" "){
            if (ans.length>0){
                ans+=" "
            }
        let j=i
        while (j>=0 && s[j]!==" "){
            j-=1
        }
        let word=""
        for (let k=j+1; k<=i; k++){
            word+=s[k]
        }
        ans+=word
        i=j
        }
    }
    return ans
}
