var fs = require('fs');

// fs.writeFile('11-mynewfile.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Created!');
// });

fs.writeFile('11-mynewfile.txt', 'This is new text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });