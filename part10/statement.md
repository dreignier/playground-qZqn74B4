Now we have to deal with the difficult part of promises: chaining. Chaining promises is the very reason we have promises in the first place. It's a proper way to tell JavaScript the next thing to do after an asynchronous task is done, thus avoiding the pyramid of doom we saw in the previous lessons.

Did you ask yourself, "What is the result of the `then` method?" Here is the answer: It's a promise. But what promise is it? It can be the promise you want. It's easier to explain with an example so take a look at the following code and run it.

@[Test the code]({"stubs":["code.js"], "command":"node code.js", "layout": "aside", "project":"part10"})

First of all, when dealing with promises chains, people often put a new line before the first call. It's pretty hard to read and confusing when you don't know the syntax. Read the code carefully. The statement starting on line 3 ends on line 17. Each call of `then` is part of the same "line of code".

So, what is going on here? Let's take a deep breath and analyze it line by line:

* Line 1: We call `job1` and we store the returned promise in a variable called `promise`.
* Line 5: We call `then` on this promise and we attach a callback for when the promise is resolved
* Line 6: We print `data1` and it is obvioulsy `result of job 1` (see line 22)
* Line 7: On this line, we call `job2` and we return the resulting promise. Keep that in mind and go to line 10.
* Line 10: We call `then` on the result of the first `then`. The result of `then` is always a promise. *Always.* At worst, it can be a never resolved promise, but it is a promise. In this case, the promise is the return value of `job2` (called at line 7). When you are in a `then` callback, if you return a promise, it will be the resulting promise of the `then` call.
* Line 11: We print `data2`. According to the `resolve` call in the promise returned by `job2` (called at line 7), `data2` is `result of job 2` (see line 30). By chaining our 2 promises (`job1` then `job2`), `job2` is always executed after `job1`. Line 6 is executed when the `job1` promise is resolved, line 11 is executed when the `job2` promise is resolved.
* Line 12: We return a simple string `'Hello world'`.
* Line 15: We call `then` on the result of the `then` call on line 10. The promise here is an auto-resolved promise, and it will pass `'Hello world'` in the data. When you are in a `then` callback, if you return anything but a promise, an auto-resvoled promise is created, and this promise will be the result of the `then` call.
* Line 16: We print `data3` and this is the `'Hello world'` returned at line 12.
* Line 17: End of line 3 (yes, this is a very long line!). At this point, you can add a `then` call if you want. `then` always returns a promise. And if you decide to return nothing (like at line 16, we don't return anything), `then` returns an auto-resolved promise with no data (if you try to get any data, you'll get `undefined`).

Chaining promises is very powerfull and simple to use. This is how you master asynchronous code.
