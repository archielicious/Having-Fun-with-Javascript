function plusOne(digits) {
    let str=""
    for (let i=0; i<digits.length; i++){
        str+=digits[i]
    }
    let num=BigInt(str)+BigInt(1)
    let arr=[]
    let numStr=num.toString()
    for (let j=0; j<numStr.length; j++){
        arr.push(numStr[j])
    }
    return arr;
}
