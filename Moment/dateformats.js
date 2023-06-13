const moment = require("moment")
let startDate="2018-03-26 00:00:00"
let endDate="2018-03-26 23:25:00"
let _startDate = moment(startDate)
let _endDate=moment(endDate)
console.log("start after change",_startDate)
console.log("end after change",_endDate)

//24hrs pattern 
//hour
let startHour24 = _startDate.format("H")
let endHour24= _endDate.format("H")
console.log("start hour is",startHour24)
console.log("end hour is",endHour24)


//min
let startMin24 = _startDate.format("m")
let endMin24= _endDate.format("m")
console.log("start Min is",startMin24)
console.log("End Min is",endMin24)


//
let start="2018-03-26 2:00:00"
let end="2018-03-28 5:25:00"
var a = moment(start)
var b = moment(end)
var c = Math.ceil(Math.abs(b-a)/36e5)
let arr= []
let obj={}
obj.date = a.format("YYYY/MM/DD")
obj.HR=a.format('H')
obj.MI='0'
arr.push(obj)
console.log("the hour is",a.format("YYYY/MM/DD"))
for(let i =0; i<c-1 ;i++){
  //  console.log("the hour is",a.add(0,'hours').format("YYYY/MM/DD"))
    let obj={}
    a.add(1,'hours')
    obj.date = a.format("YYYY/MM/DD")
    obj.HR=a.format("H")
    obj.MI="0"
    
    arr.push(obj)
}
console.log("final array is",arr)