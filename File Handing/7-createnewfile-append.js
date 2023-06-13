var fs = require('fs');
fs.appendFile('7-mynewfile1.txt','Hello content!',function(err){
    if (err) throw err;
    console.log("saved");
})

//appending into existing file
fs.appendFile('7-mynewfile2.txt','Hello content new!',function(err){
    if (err) throw err;
    console.log("saved");
})
