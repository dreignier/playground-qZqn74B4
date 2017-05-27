let express = require('express');

let app = express();

app.use(express.static('static'));

app.listen(8888);

console.log('TECHIO> open -p 8888 part2.html);