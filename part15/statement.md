You are now near the end of this playground. But the wild outside can be dangerous. So don't leave without a few tricks.

# Handle an array of promise sequentially

Sometimes you have an array of promise and you want to handle them one by one, sequentially. You can use the [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function and the promises chain feature.

@[Promise.all example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part15"})

# Test if an object is a promise

If you really have to, this is how you can test if an object is a promise : `obj instanceof Promise`.
The problem is that this test only work with a real `Promise` object. It will not work with the Q library of with an Angular promise.