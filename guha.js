function guha(para){
    if (para.length===0){
        return " " + "kha"
    }
    return para[0]+guha(para.slice(1))
    
//     for (let i=0; i<para.length; i++){
//         if (i===para.length-1){
//             return `${para[i]} kha`
//         }
//         return para[i]+guha(para.slice(i+1))
//     }
}
