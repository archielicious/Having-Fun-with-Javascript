function hcfBasic(a, b) {
    if (a===0){
        return b
    }
    else if(b===0){
        return a
    }
    else if(a>b){
        return hcfBasic(b, a%b)
    }
    else if(b>a){
        return hcfBasic(a, b%a)
    }
    else if(a===b){
        return a
    }
}
function hcfOfArray(n,arr) {
    if (n===2){
        if (arr[0]===0){
        return arr[1]
    }
    else if(arr[1]===0){
        return arr[0]
    }
    else if(arr[0]>arr[1]){
        return hcfBasic(arr[1], arr[0]%arr[1])
    }
    else if(arr[1]>arr[0]){
        return hcfBasic(arr[0], arr[1]%arr[0])
    }
    else if(arr[0]===arr[1]){
        return arr[0]
    }
    }
    return hcfBasic(arr[0], hcfOfArray(n-1, arr.slice(1)))
}
