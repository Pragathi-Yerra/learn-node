const fs = require('fs');
const data = fs.readFileSync(__filename); // reads file in a synchronous way
console.log('File data is',data);
console.log('TEST');