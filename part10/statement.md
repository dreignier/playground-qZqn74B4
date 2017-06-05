Now we have to deal with the difficult part of the promises. The chaining. Did you ask yourself: what is the result of the `then` method ? Here is the answer: it's a promise. But what promise is it ? It can be the promise you want. It's easier to explain with an example so take a look at the following code and run it.

@[Change the code to return a promise]({"stubs":["code.js"], "command":"node code.js", "layout": "aside", "project":"part10"})

First of all, when dealing with promises chains, people often put a new line before the first call. It's pretty hard to read it when you don't know it and it can be confusing. Read the code carefully. The line 3 ends at line 17. Each call of `then` is on the same "line of code".

So, what is going on here ? Let's take a deep breath and check it line by line:

* Line 1: We call `job1` and we store the returned promise in a variable called `promise`.
* Line 5: We call `then` on this promise and we attach a callback for when the promise is resolved
* Line 6: We print `data1` and it is obvioulsy `result of job 1` (check at line 22)
* Line 7: At this line, we call `job2` and we returns it. Keep that in mind and check line 10.
* Line 10: We call `then` on the result of the first `then`. The result of `then` is always a promise. Always. At worst, it can be a never resvoled promise. But it is a promise. In this case, the promise is the result of `job2` (called at line 7). When you are in a `then` callback, if you return a promise, it will be the resulting promise of the `then` call.
* Line 11: We print `data2`, since the promise if the `job2` result (called at line 7), `data2` is `result of job 2` (check at line 30). By chaining our 2 promises (`job1` then `job2`), `job2` is always executed after `job1`. Line 6 is executed when `job1` promise is resolved, line 11 is executed when `job2` promise is executed.
* Line 12: We return a simple string `'Hello world'.
* Line 15: We call `then` on the result of the `then` call at line 10. The promise here is an auto resolved promise and it will give `'Hello world'` in the data. When you are in a `then` callback, if you return anything but a promise, an auto resvoled promise is created and it will be the result of the `then` call.
* Line 16: We print `data3` and this is the `'Hello world'` returned at line 12.
* Line 17: End of line 3 (yes, this is a very long line !). At this point, if you want to add a `then` call, you can. `then` always return a promise. And if you decide to return nothing (like at line 16, we don't return anything), `then` returns an auto resolved promise with no data (if you try to get a data, you'll have an `undefined`).

Chaining promises is very powerfull and simple to use. This is how you master asynchronous code.