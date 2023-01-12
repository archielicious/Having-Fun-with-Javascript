function createMatrix(size) {
  lst=[]
  row=[]
  for(i=0;i<size;i=i+1){
    lst.push(row)
    }
  for(j=0;j<size;j=j+1){
      row.push(j)
  }
  return lst
}
