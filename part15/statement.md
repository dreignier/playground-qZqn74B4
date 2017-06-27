You are now towards the end of this playground. However, the wild outside can be dangerous. So don't leave without a few tricks!

# Test if an object is a promise

If you *really* have to, this is how you can test if an object is a promise : `obj instanceof Promise`.
The problem is that this test only works with a real `Promise` object. It will not work with the Q library or with an Angular promise.

# `Promise.race`

[`Promise.race`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) takes an array of promises. The result is a new promise that resolves or rejects as soon as one of the promises in the given array resolves or rejects.

@[Promise.race example]({"stubs":["code2.js"], "command":"node code2.js", "project":"part15"})
