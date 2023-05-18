function wordCount(s) {
    // return s.split(" ").length

    let sCopy=s
    let count=0
    for (let i=0; i<sCopy.length; i++){
        if ((i>0 && sCopy[i]!==" " && sCopy[i-1]===" ") || (i===0 && sCopy[i]!==" ")){
            count+=1
        }
    }
    return count
}
