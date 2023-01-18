function matrixMultiplication(lst1,lst2){
    if(lst1[0].length===lst2.length){
        let lst=[]
        for(let i=0;i<lst1.length;i=i+1){
            let row=[]
            for(let k=0;k<lst2[0].length;k=k+1){
                let sum=0
                for(let j=0;j<lst1[0].length;j=j+1){
                    sum=sum+(lst1[i][j]*lst2[j][k])
                }
            row.push(sum)
            }
        lst.push(row)
        }
        return lst
    } 
    else{
        return 'Matrix multiplication is not possible for the given matrices'
    } 
}
