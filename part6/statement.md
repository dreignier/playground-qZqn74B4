First of all, to use the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) class, all you have to do is this:

```javascript
var promise = new Promise(function(resolve, reject) {

});
```

Beware: this class is not available everywhere. If you want to use it in a browser, take a look at [caniuse](https://caniuse.com/#feat=promises). If you need to use the Promise class in Internet Explorer, you should use the [Q library](https://github.com/kriskowal/q). Q has multiple ways to create a promise, but if you want to stick with the standard way to create a promise, you should use this one:

```javascript
var promise =  Q.Promise(function(resolve, reject) {

});
```

If you use [AngularJS](https://angularjs.org/), you have to use the `$q` service:

```javascript
var promise =  $q(function(resolve, reject) {

});
```

In many recent frameworks, any asynchronous function will return a "Promise-like" object:

```javascript
// Ajax request in jQuery:
var promise = $.get('/foo/bar/common');

// Ajax request in AngularJS:
var promise = $http.get('/foo/bar/common');

// $timeout service in AngularJS
var promise = $timeout(function() {
    console.log('test');
}, 1000);
```
