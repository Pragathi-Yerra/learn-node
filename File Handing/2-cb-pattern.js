const fs = require("fs");
fs.readFile(__filename,function cb(err,data){
    console.log(data); //async file reading
})
console.log("Test");