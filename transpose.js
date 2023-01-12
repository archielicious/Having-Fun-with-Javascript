function transpose(arr) {
  count=arr[0].length
  lst=[]
  for(j=0;j<count;j=j+1){
    col=[]
    for(i=0;i<arr.length;i=i+1){
      row=arr[i]
      col.push(row[j])
    }
    lst.push(col)
  }
  return lst
}
