Javascript is full of challenges. Using asynchronous code can help you in many of them.

# Better performances

Your code will be actually faster because you can do multiple thing at the same time. You can start multiples requests, processing some data while you are waiting for the end of an asynchronous code ... And because your user interface won't freeze anymore, the uers will think that your code is faster !

# Prepare for the future

Browsers will abandon synchronous requests. We can't avoid that. One day it will just stop working. Some recents Javascript frameworks (like [AngularJS](https://angularjs.org/)) forbid synchronous requests. You have to be ready for the asynchronous.

# Is there any downsides ?

Yes there is. As you know now, asynchronous code rely on giving callbacks. The problem is that everyone is doing as they want. If you know how to do asynchronous code with a framework like [jQuery](http://jquery.com/), you can't just use it directly with any other framework. But there is more downsides. Take a look at this code:

```javascript
function job1(callback) {
    setTimeout(function() {
        callback('test 1');
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback('test 2');
    }, 4000);
}

job1(function(data) {
    console.log(data);

    job2(function(data) {
        console.log(data);
    });
});
```

In this code, we want to call `job2` after `job1`. If `job1` is a framejob function, you can't modify it. So you have to call `job2` in your callback directly. This kind of code will force a monolithic code because each callback have to know the next callback. But you can have far worse. We all know it. The pyramid of *DOOM*:

```javascript
job1(function() {
    doSomething1();

    job2(function() {
        doSomething2();

        job3(function() {
            doSomething3();

            job4(function() {
                doSomething4();
            });
        });
    });
});
```

The next big problem is when you want to join multiples asynchronous code. Imagine you want to execute some code when `job1`and `job2` are done. You'll code something like this:

```javascript
var counter = 0;

job1(function() {
    doSomething1();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

job2(function() {
     doSomething2();

    counter += 1;

    if (counter == 2) {
        done();
    }
});

function done() {
    console.log('done');
}
```

With more and more asynchronous codes and features in the recents frameworks, we need something to rule it. And here comes our savior: the Promise class.