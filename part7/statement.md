How can the Promise class can help us ? First of all, everyone use it because it is now the standard way to deal with asynchronous code. So we have to use it. Stay in the standard way is always the best thing to do. Now that we know that, here a simple example of how to use a promise

@[First promise example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part7"})

As you can see, you can use the `resolve` function to fullfil the promise. The `then` function bind a callback on the promise and you can use the data given to the `resolve` function. You can bind multiples callbacks:

@[Multiple callbacks]({"stubs":["code2.js"], "command":"node code2.js", "project":"part7"})

The `reject` function is use to trigger an error. When you use `then`, you can give 2 functions. The first function is used when the promise is a success. The second function is used when the promise is an error.

@[When an error happen]({"stubs":["code3.js"], "command":"node code3.js", "project":"part7"})

You can still bind multiples `then`:

@[When an error happen with multiple callbacks]({"stubs":["code4.js"], "command":"node code4.js", "project":"part7"})

You can call `resolve` and `reject` multiple times. But this is useless. Once a promise is finished, it can't restart.

@[Calling resolve multiple times]({"stubs":["code5.js"], "command":"node code5.js", "project":"part7"})