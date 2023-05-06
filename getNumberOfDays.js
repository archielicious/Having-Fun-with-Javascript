function getNumberOfDays(date) {
     let todaysdate=new Date()
     let dateList=date.split("/")
     let givenDate=new Date(parseInt(dateList[2]), parseInt(dateList[1]-1), parseInt(dateList[0]))
     let difference=todaysdate-givenDate
     let days=Math.floor(difference/(1000*3600*24))
     return days
     
}
