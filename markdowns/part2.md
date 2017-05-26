In Javascript, you have to deal often with asynchronous code. It can happen in multiple situations (non exhaustive list):

* Doing an http request
* Any I/O operation when you are in a NodeJS environment
* Dealing with a WebSocket (client or server side)

For example, the following code is asynchronous (reading a file with NodeJS):

@[Read a file content in NodeJS]({"stubs":["part2.01.js"], "command":"node part2.01.js"})