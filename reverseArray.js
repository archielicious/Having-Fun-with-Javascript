function reverseArray(n,arr) {
    let i=0
    let j=arr.length-1
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i+=1
        j-=1
    }
    return arr
}
