When you deal with promise chaining, you must avoid some traps.

# The broken chain

Take the following code:

```javascript
function test() {
    var promise = job();

    promise.then(function(data) {
        doSomething(data);
    });

    return promise;
}
```

In this code, we add a callback on the promise. Then we return the promise. The problem is that we return the initial promise. Not the result of `promise.then`. The result of `promise.then` is a lost promise because no one can interact with it.

You should write this:

```javascript
function test() {
    return job().then(function(data) {
        doSomething(data);
    });
}
```

But beware, sometimes you must break the chain ! For example, maybe `doSomething` is an asynchronous job but you don't want to slow the promise chain with it. Just be carefull and be sure of what you are doing when you break a promise chain.

# The pyramid of doom

You maight be tempted to write something like this:

```javascript
function test() {
    return job().then(function() {
        return job2().then(function() {
            return job3().then(function() {
                return job4().then(function() {
                    doSomething();
                });
            });
        });
    });
}
```

This code is wrong. Because the result of your function is `job().then` result. You broke the chain again. Use the promise chaining feature:

```javascript
function test() {
    return job()

    .then(function() {
        return job2();
    })

    .then(function() {
        return job3();
    })

    .then(function() {
        return job4();
    })

    .then(function() {
        doSomething();
    });
}
```

# The ghost promise

As a rule of thumb: when a function can return a promise, *ALWAYS* return a promise. Otherwise you'll have this ugly code everywhere:

```javascript
function job() {
    if (test) {
        return aNewPromise();
    } else {
        return 42;
    }
}

var result = job();

if (typeof job === 'object' && typeof job.then === 'function') {
    // ...
} else {
    // ...
}
```

If you want to create an auto-resolved promise with a simple value, use [`Promise.resvole`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve):

```javascript
function job() {
    if (test) {
        return aNewPromise();
    } else {
        return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
    }
}
```

And if you want to create an auto-rejected promise, use [`Promise.reject`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

# The forgotten promise

You call a method that returns a promise but you create your own promise:

```javascript
function test() {
    var promise = job();

    return new Promise(function(resolve, reject) {
        promise.then(function(data) {
            data = doSomething(data);
            resolve(data);
        }, function(error) {
            reject(error);
        });
    });
}
```

A lot of pointless code here. You can fix it like this:

```javascript
function test() {
    return job().then(function(data) {
        return doSomething(data);
    });
}
```
