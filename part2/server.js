let express = require('express'),
    fs = require('fs');

let app = express();

app.get('/code.html', function(req, res) {
    // Give the file directly
    fs.readFile('code.html', 'utf8', function(error, data) {
        res.type('html').send(data).end();
    });
});

app.get('/content.html', function(req, res) {
    // Wait 5 seconds and then give the file
    setTimeout(function() {
        fs.readFile('content.html', 'utf8', function(error, data) {
            res.type('html').send(data).end();
        });
    }, 5000);
});

app.listen(8888);

console.log('TECHIO> open -p 8888 /code.html');