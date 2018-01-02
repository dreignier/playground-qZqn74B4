How can the Promise class help us? First off, everyone uses it because it is now the standard way to deal with asynchronous code... so we have to use it. Following the standard is always the best thing to do. Now that we know that, here is a simple example of how to use a promise.

@[First promise example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part7"})

As you shown above, you can use the `resolve` function to fullfil the promise. The `then` function binds a callback to the promise and you can use the data given to the `resolve` function. 

You can bind multiples callbacks:
@[Multiple callbacks]({"stubs":["code2.js"], "command":"node code2.js", "project":"part7"})

The `reject` function is used to trigger an error. When you use `then`, you can give 2 functions. The first function is used when the promise exits successfully. The second function is used when the promise encounters an error.

@[When an error happens]({"stubs":["code3.js"], "command":"node code3.js", "project":"part7"})

You can still bind multiple `then` methods:

@[When an error happens with multiple callbacks]({"stubs":["code4.js"], "command":"node code4.js", "project":"part7"})

You can call `resolve` and `reject` multiple times, but this is useless. Once a promise is finished, it can't restart.

@[Calling resolve multiple times]({"stubs":["code5.js"], "command":"node code5.js", "project":"part7"})
