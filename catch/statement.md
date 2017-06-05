The `catch` method on a promise is pretty simple because this is an alias if `then(null, callback)`.

```javascript
var promise = request();

promise.catch(function(error) {
    displayError(error); 
});

// This is the same code as this:
promise.then(null, function(error) {
    displayError(error);
});
```