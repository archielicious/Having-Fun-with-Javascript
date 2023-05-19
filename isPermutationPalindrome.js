function isPermutationPalidrome(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let count=0
    for (let j of map.keys()){
        if (map.get(j)%2!==0){
            count+=1
        }
    }
    if (count>=2){
        return false
    }
    return true
}
