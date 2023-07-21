function alphanumeric(c){
    if (c>='a' && c<='z'){
        return true
    }
    if (c>='A' && c<='Z'){
        return true
    }
    if (c>='0' && c<='9'){
        return true
    }
    return false
}

function isPalindrome(s) {
    // let i=0
    // let j=s.length-1
    // while (i<=j){
    //     if (s[i]!==s[j]){
    //         return false
    //     }
    //     else if (s[i]===s[j]){
    //         i++
    //         j--
    //     }
    //     return true
    // }

    let i=0
    let j=s.length-1
    while (i<=j){
        if (alphanumeric(s[i])===false){
            i++
            continue
        }
        else if (alphanumeric(s[j])===false){
            j--
            continue
        }
        else if (s[i].toLowerCase()!==s[j].toLowerCase()){
            return false
        }
        else if (s[i].toLowerCase()===s[j].toLowerCase()){
            i++
            j--
        }
    }
        return true
}
