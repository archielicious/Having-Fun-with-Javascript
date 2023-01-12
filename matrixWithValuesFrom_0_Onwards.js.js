function createMatrixII(size){
  lst=[]
  for(count=0;count<size;count=count+1){
    row=[]
    for(j=count*size;j<(count+1)*size;j=j+1){
      row.push(j)
    }
    lst.push(row)
  }
  return lst
}
