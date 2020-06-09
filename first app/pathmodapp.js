const path = require('path');
const os = require('os');

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

//Template String

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);