Sometimes you have multiple asynchronous tasks to perform and you have to start something when every task is done. When you are using promises, you can do that with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Run the following code to understand the basics of it.

@[Promise.all example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part14"})

As you can see, `Promise.all` returns a promise. The received data is an array containing the data of each given promise. The promise is resvoled when all given promises are resolved.

But beware, `Promise.all` has a fail-jfst behaviour. If a given promise is rejected, the resulting promise of `Promise.all` will be rejected at this exact moment. It will not wait for the other promises to complete, and the only received data is the error of the rejected request. See the following example for a better understanding.

@[Promise.all fail-fast behaviour]({"stubs":["code2.js"], "command":"node code2.js", "project":"part14"})

As you can see, `error p4` is displayed. We can't access the result of the other promises. You should use `Promise.all` only when you need for all of your promises to resolve successfully.

But what if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected ? Just use `catch`. See the following example.

@[Promise.all with catch]({"stubs":["code3.js"], "command":"node code3.js", "project":"part14"})

So in this example, we don't give the promises directly to `Promise.all`. We give the result of `p.catch`, this is an auto-resolved promise, so `Promise.all` won't stop. But in this case you have to test the received data yourself, to check for errors.
