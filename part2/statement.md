Asynchronous execution is not just an obscure JavaScript magician's concept. We need it for a good reason. Take the following code snippet for example. Click on the "Run my code" button to start the demo.

Both buttons do the same job. A http request is sent to get a distant file and then print it. The request is very slow on purpose (the server will wait 5 seconds to respond).

One button executes synchronous code and the other button executes asynchronous code. As you can see, when you click on the first button, the user interface just freezes during the code execution. This is because the main thread can't execute the code and refresh the user interface at the same time. When you click on the second button, the main thread finishes its job with the user interface and then the code is executed.

@[Why we need asynchronous]({"layout": "aside", "stubs": ["code.html"], "command": "node server.js", "project":"part2"})

The example above uses [jQuery](http://jquery.com/) to perform the http request.

In the future, synchronous http requests will not be supported by browsers. Dealing with asynchronous execution is *a must have* in the JavaScript world.
