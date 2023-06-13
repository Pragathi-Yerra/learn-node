import momentzz from 'moment-timezone';
import dateFormat from 'dateformat';
import moment from 'moment-timezone';
var startDate = "2020-12-03 03:20:00"
var endDate = "2020-12-02 03:20:00"
console.log("end year",parseInt(dateFormat(endDate,'yyyy')))
console.log("end month",momentzz([parseInt(dateFormat(endDate,'mm'))-1]))
console.log("end day",parseInt(dateFormat(endDate,'dd')))

var endDate1 = momentzz([parseInt(dateFormat(endDate,'yyyy')),parseInt(dateFormat(endDate,'mm'))-1,parseInt(dateFormat(endDate,'dd'))]);
console.log("enddate",endDate)
var startDate1 = momentzz([parseInt(dateFormat(startDate,'yyyy')),parseInt(dateFormat(startDate,'mm'))-1,parseInt(dateFormat(startDate,'dd'))]);
console.log("startdate",startDate)
console.log(typeof(startDate))
console.log((typeof(startDate1)))
let diffdays= (Math.ceil(endDate1.diff(startDate1,'days')))
console.log("different days -->",diffdays)
if(momentzz(moment(endDate).format("YYYY-MM-DD")).isAfter(moment(startDate).format("YYYY-MM-DD"))){
    diffdays=diffdays+1
}
if(diffdays ===0){
    diffdays=1
}
console.log("afterchange",diffdays)