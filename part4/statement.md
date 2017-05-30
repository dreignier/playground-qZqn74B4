The given code is synchronous. It call `callback1` one time and `callback2` three times. You must modify this code to make it asynchronous with the following rules:

* `callback1` must be called only one time 2 seconds later
* `callback2` must be called three times with an interval of 1 second.

@[Change the code to make it asynchronous]({"stubs":["code.js"], "command":"node referee.js", "layout": "aside", "project":"part4"})