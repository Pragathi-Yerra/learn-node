var fs = require('fs');

// fs.writeFile('12-mynewfile.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Created!');
// });

// fs.unlink('12-mynewfile.txt',function(err){
//     if(err) throw err;
//     console.log('Deleted!');
// })


fs.rename('12-mynewfile.txt', '12-myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});