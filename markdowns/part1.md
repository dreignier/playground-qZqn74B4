In Javascript, asynchronous comes in multiple ways. The simpliest example is this one:

@[Asynchronous code using `setTimeout`]({"stubs":["part1.01.js"], "command":"node part1.01.js"})

You can try to modify the displayed messages or the time given at the `setTimeout` function. Even with a `0` millesecond delay, the asynchronous message will be displayed in second. Because any function given to the `setTimeout` function will be executed asynchronously when the main thread is not busy anymore. You can try this code as an example:

@[Asynchronous code is always executed after the main thread]({"stubs":["part1.02.js"], "command":"node part1.02.js"})

What can we learn from this ? A simple thing: never trust the delay given to the `setTimeout` function. Even if you give a `0` delay, your code can be executed far more later. You just give a minimum delay.

The second example of asynchronous code in Javascript is by using `setInterval`:

@[Asynchronous code using setInterval]({"stubs":["part1.03.js"], "command":"node part1.03.js"})

`setInterval` has the same behavior as `setTimeout` but the code is executed multiple times. You have to call `clearInterval` to kill the timer.

`setTimeout` and `setInterval` are the only native functions of the Javascript to execute some code asynchronously. But if you are familiar with Javascript, you already dealt with asynchronous in differents ways. This is the next lesson.