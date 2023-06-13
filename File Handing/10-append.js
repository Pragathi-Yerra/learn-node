var fs = require('fs');

// fs.writeFileSync("10-appendfile.txt","Hello Iam Sony",function(err){
//     if(err) throw err;
//     console.log("written");
// })

fs.appendFile("10-appendfile.txt","Iam a CSE Student",function(err){
    if(err) throw err;
    console.log("Updated");
})