Now we have to deal with the difficult part of the promises. The chaining. Did you ask yourself: what is the result of the `then` method ? Here is the answer: it's a promise. But what promise is it ? It can be the promise you want. It's easier to explain with an example so take a look at the following code.

@[Change the code to return a promise]({"stubs":["code.js"], "command":"node code.js", "layout": "aside", "project":"part11"})

First of all, when dealing with promises chains, people often put a new line before the first call. It's pretty hard to read it when you don't know it and it can be confusing. Read the code carefully. The line 3 ends at line 17. Each call of `then` is on the same "line of code".

