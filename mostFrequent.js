function mostFrequent(text) {
    let frequency=new Array(256)
    for (let i=0; i<frequency.length; i++){
        frequency[i]=0
    }
    let max=-1
    for (let j=0; j<text.length; j++){
        frequency[text[j].charCodeAt(0)]+=1
        max=Math.max(max, frequency[text[j].charCodeAt(0)])
    }
    for (let k=0; k<frequency.length; k++){
        if (frequency[k]===max){
            return [String.fromCharCode(k), max]
        }
    }
    
//     let map=new Map()
//     let str=text.split("")
//     for (i of str){
//         map.set(i, (map.get(i) || 0) + 1)
//     }
//     let final=[...map].sort((a, b)=>a[0].charCodeAt(0)-b[0].charCodeAt(0))
//     let largest=-Infinity
//     let ans=[]
//     for (j of final){
//         if (j[1]>largest){
//             largest=j[1]
//             ans=j
//         }
//     }
//     return ans
}
