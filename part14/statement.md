Sometimes you have multiple asynchronous tasks to perform and you have to start something when every tasks are done. When you are using promises, you can do that with `Promise.all`. Run the following code to understand the basics of it.

@[Promise.all example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part14"})

As you can see, `Promise.all` returns a promise. The received data is an array containing the data of each given promises. The promise is resvoled when all given promises are resolved.

But beware, `Promise.all` has a fail-jast behaviour. If a given promise is rejected, the resulting promise of `Promise.all` will be rejected at this exact moment. It will not wait for the others promises and the only received data is the error of the rejected request. See the following example for a better understanding.

@[Promise.all fail-fast behaviour]({"stubs":["code2.js"], "command":"node code2.js", "project":"part14"})

As you can see, `error p4` is displayed. We can't have the result of other promises. You should use `Promise.all` when you need that all of your promises is a success.

But what if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected ? Just use `catch`. See the following example.

@[Promise.all with catch]({"stubs":["code3.js"], "command":"node code3.js", "project":"part14"})

Calling `catch` without any parameter is the same as `catch(function() {})`. So in this example, we don't give the promises directly to `Promise.all`. We give the result of `p.catch`, this is an auto resolved promise so `Promise.all` won't stop. But you have to test yourself in the end the received data.