    function stringCompressionI(s) {
    // let strSet=new Set(s)
    // let obj={}
    // for (let i of strSet.values()){
    //     obj[i]=0
    // }
    // let keyArr=Object.keys(obj)
    // for (let i=0; i<keyArr.length; i++){
    //     for (let j=0; j<s.length; j++){
    //         if (s[j]===keyArr[i]){
    //             obj[keyArr[i]]+=1
    //         }
    //     }
    // }
      
    //  // for (let i=0; i<s.length; i++){
    //  //     if (!obj[s[i]]){
    //  //         obj[s[i]]=1
    //  //     }
    //  //     else{
    //  //         obj[s[i]]+=1
    //  //     }
    //  // }
        
    // let str=""
    // for (let k in obj){
    //     str+=k+obj[k]
    // }
    // return str
    
    let map=new Map()
    for (let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let str=""
    for (let k of map.keys()){
        str+=k+map.get(k)
    }
       return str
}
