Let's do a harder exercice. In this code, your function receives a parameter `data`. You must modify this code according to the following rule:
 * Your function must always return a promise
 * If `data` is not a number, return a promise rejected instantly and give the data `"error"` (in a string)
 * If `data` is an odd number, return a promise resolved 1 second later and give the data `"odd"` (in a string)
 * If `data` is an even number, return a promise rejected 2 seconds later and give the data `"even"` (in a string)

@[Change the code to return a promise]({"stubs":["code.js"], "command":"node referee.js", "layout": "aside", "project":"part9"})

> Hint: When you code a function returning a promise, always return a promise. If you want to handle an error, just return a promise and reject it. You will have more maintenable code like this.

> Hint: use `isNaN(data)` to check if `data` is **not** a number
