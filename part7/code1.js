var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data);
});