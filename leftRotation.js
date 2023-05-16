function leftRotation(a,d) {
    let n=a.length;
    let ans=new Array(n);
    for (let i = 0; i < n; i++) {
        let new_pos = (i - d + n)%n;
        ans[new_pos] = a[i];
    }
    return ans;

    // let len=a.length
    // if (len>d){
    //     let arrAdd=a.splice(0,d)
    //     return a.concat(arrAdd)
    // }
    // else{
    //     let arrAdd=a.splice(0, d%len)
    //     return a.concat(arrAdd)
    // }
}
