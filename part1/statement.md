 In JavaScript, asynchronous execution comes in multiple forms. The simplest example is shown below:

@[Asynchronous code using setTimeout]({"stubs":["code1.js"], "command":"node code1.js", "project":"part1"})

You can try to modify the displayed messages or the time provided to the `setTimeout` function. Even with a `0` millesecond delay, the asynchronous message will be displayed after the synchronous message. This is because any function given to the `setTimeout` function will be executed asynchronously, when the main thread is not busy anymore. You can try this code as an example:

@[Asynchronous code is always executed after the main thread]({"stubs":["code2.js"], "command":"node code2.js", "project":"part1"})

What can we learn from this? Simply, never trust the delay given to the `setTimeout` function. You can only specify a minimum delay. Even if you set a `0` delay, your code could be executed much later. 

[MDN documentation of `setTimeout`](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout)

Try this example of asynchronous code in JavaScript using `setInterval`:

@[Asynchronous code using setInterval]({"stubs":["code3.js"], "command":"node code3.js", "project":"part1"})

`setInterval` has the same behavior as `setTimeout` but the code is executed multiple times. You have to call `clearInterval` to kill the timer.

[MDN documentation of `setInterval`](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval)

`setTimeout` and `setInterval` are the only native functions of the JavaScript to execute code asynchronously. However, if you are familiar with JavaScript, you have probably dealt with asynchronous execution in various forms. It can happen in multiple situations (non-exhaustive list):

* Performing an HTTP request
* Any I/O operation when you are in a NodeJS environment
* Dealing with a WebSocket (client or server side)

The following code snippet is asynchronously reading a file with NodeJS:

@[Read a file in NodeJS]({"stubs":["code4.js"], "command":"node code4.js", "project":"part1"})
