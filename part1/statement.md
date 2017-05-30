In Javascript, asynchronous comes in multiple ways. The simpliest example is this one:

@[Asynchronous code using setTimeout]({"stubs":["code1.js"], "command":"node code1.js", "project":"part1"})

You can try to modify the displayed messages or the time given at the `setTimeout` function. Even with a `0` millesecond delay, the asynchronous message will be displayed in second. Because any function given to the `setTimeout` function will be executed asynchronously when the main thread is not busy anymore. You can try this code as an example:

@[Asynchronous code is always executed after the main thread]({"stubs":["code2.js"], "command":"node code2.js", "project":"part1"})

What can we learn from this ? A simple thing: never trust the delay given to the `setTimeout` function. Even if you give a `0` delay, your code can be executed far more later. You just give a minimum delay.

MDN documentation of `setTimeout`: https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setTimeout

The second example of asynchronous code in Javascript is by using `setInterval`:

@[Asynchronous code using setInterval]({"stubs":["code3.js"], "command":"node code3.js", "project":"part1"})

`setInterval` has the same behavior as `setTimeout` but the code is executed multiple times. You have to call `clearInterval` to kill the timer.

MDN documentation of `setInterval`: https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval

`setTimeout` and `setInterval` are the only native functions of the Javascript to execute some code asynchronously. But if you are familiar with Javascript, you already dealt with asynchronous in differents ways. It can happen in multiple situations (non exhaustive list):

* Doing an http request
* Any I/O operation when you are in a NodeJS environment
* Dealing with a WebSocket (client or server side)

For example, the following code is asynchronous (reading a file with NodeJS):

@[Read a file content in NodeJS]({"stubs":["code4.js"], "command":"node code4.js", "project":"part1"})