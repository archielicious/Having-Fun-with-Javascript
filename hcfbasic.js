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
