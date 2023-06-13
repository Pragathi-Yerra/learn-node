var fs = require('fs');
fs.open('8-openfiletowrite.txt','w',function(err,file){
    if (err) throw err;
    console.log('Saved!');
})