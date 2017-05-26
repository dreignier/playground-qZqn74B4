let fs = require('fs');

fs.readFile('test.txt', 'utf8', function(error, data) {
    if (error) {
         throw error;
    }

    console.log("Content of test.txt:", data);
});

console.log('Synchronous message');