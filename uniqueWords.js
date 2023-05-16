function uniqueWords(n,s) {
    let strObject={}
    for (let i=0; i<n; i++){
        if (!strObject[s[i]]){
            strObject[s[i]]=1
        }
        else{
            strObject[s[i]]+=1
        }
    }
    return Object.keys(strObject).length
}
