function countOfTwos(n) {
    let count=0
    for (let i=1; i<=n; i++){
        for (let j=0; j<String(i).length; j++){
            if (String(i)[j]==="2"){
                count+=1
            }
        }
    }
    return count;
}
