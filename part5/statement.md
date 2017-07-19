JavaScript is full of challenges. Using asynchronous code can help you with many of them.

# Better performance

Your code will actually be faster because you can perform other tasks while waiting for an asynchronous function to finish running. You can also start multiples requests and processing data while you are waiting for some asynchronous code to complete.  On top of that, your user interface won't freeze anymore and the users will think that your code is faster!

# Prepare for the future

Browsers will abandon synchronous requests. It's something we can't avoid. One day, it will just stop working. Some recent JavaScript frameworks (like [AngularJS](https://angularjs.org/)) forbid synchronous requests. You have to be ready for the asynchronous world.

# Are there any downsides?

Yes there are. As you know now, asynchronous code relies on providing callbacks. The problem is that everyone is implementing callbacks however they want. If you are familliar with asynchronous code using a framework like [jQuery](http://jquery.com/), you know you can't just use it directly with any other framework. However, there are more downsides. Take a look at this code snippet:

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

In this code, we want to call `job2` after `job1`. `job1` takes a callback as argument. Therefore, you have to call `job2` in your callback directly. This kind of code will force a monolithic design because each callback must know the next callback. But it can get far worse; we all know it. The pyramid of *DOOM*:

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

The next big problem comes when you want to join multiple asynchronous calls. Imagine you want to execute some code when `job1`and `job2` are done. You'll code something like this:

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

With more and more asynchronous code and features in recent frameworks, we need something to manage it. Here comes our savior: the Promise class.
