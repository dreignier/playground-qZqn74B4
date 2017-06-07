Are you really listening ? Let's see.

```javascript
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});
```
?[What is the output of the code above ?]
- [ ] Error 1
- [ ] Success 1, Error 1
- [ ] Success 1, Success 2, Success 3, Success 4
- [ ] Success 1, Success 2, Success 3, Error 1, Success 4
- [ ] Error 1, Success 1, Success 2, Success 3, Succes 4
- [X] Error 1, Success 4

```javascript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error catched';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});
```

?[What is the output of the code above ?]
- [ ] error, success, Error catched
- [ ] success, success
- [ ] success, error, success, error
- [X] success, error, Error catched
- [ ] error, Error catched, success
- [ ] error, Error catched, success, error
- [ ] success, error, error
- [ ] success, success, success

```javascript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error catched';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});
```

?[What is the output of the code above ?]
- [ ] error, error, Error catched, Error: test
- [ ] success, success, Error catched, Success: Test
- [X] success, Defeat, error, Error catched, Success: test
- [ ] error, Error Catched, Success: test
- [ ] success, Defeat, error, Error catched, Error: test
- [ ] success, error, Defeat, Success: test