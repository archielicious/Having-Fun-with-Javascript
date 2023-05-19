function secondLargest(n,arr) {
    let largest=-1
    for (let i=0; i<n; i++){
        if (largest===-1){
            largest=arr[i]
        }
        else if (arr[i]>largest){
            largest=arr[i]
            let index=i
        }
    }
    // console.log(largest)
    let comp=Infinity
    for (let j=0; j<n; j++){
        let difference=largest-arr[j]
        // console.log("diff", difference)
        if (difference!==0){
                    comp=Math.min(comp, difference)
        }
        // console.log("comp", comp)
    }
    if (comp===Infinity){
        return -1
    }
    return largest-comp
}
