In Javascript, asynchronous comes in multiple ways. The simpliest example is this one:

@[Asynchronous code using `setTimeout`]({"stubs":["part1.01.js"], "command":"node part1.01.js"})

You can try to modify the displayed messages or the time given at the `setTimeout` function. Even with a `0` millesecond delay, the asynchronous message will be displayed in second. Because any function given to the `setTimeout` function will be executed asynchronously when the main thread is not busy anymore. You can try this code as an example:

@[Asynchronous code is always executed after the main thread]({"stubs":["part1.02.js"], "command":"node part1.02.js"})

The second example of asynchronous code in Javascript is by using `setInterval`:

@[Asynchronous code using setInterval]({"stubs":["part1.03.js"], "command":"node part1.03.js"})