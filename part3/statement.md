It's time to test if you are really listening.

?[What are 2 native functions to run code asynchronously in Javascript ?]
- [ ] timeout
- [X] setTimeout
- [ ] startInterval
- [ ] delay
- [X] setInterval
- [ ] repeat
- [ ] interval

```javascript
let fs = require('fs');

console.log('1');

fs.readFile('test.txt', 'utf8', function(error, data) {
    if (error) {
         throw error;
    }

    console.log('2');
});

console.log('3');
```

?[If you run the code above, what is the output ?]
- [ ] 1 2 3
- [X] 1 3 2
- [ ] 2 1 3
- [ ] 2 3 1
- [ ] 3 2 1
- [ ] 3 1 2

?[What is the function to stop an interval timer ?]
- [ ] stopTimer
- [X] clearInterval
- [ ] shutdownTimer
- [ ] clearTimer
