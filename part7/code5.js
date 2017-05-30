var promise = new Promise(function(resolve, reject) {
    counter = 0;

    var timer = setInterval(function() {
        counter += 1;

        if (counter % 2) {
            resolve('hello world ' + counter);
        } else {
            reject('we are all going to die ' + counter);
        }

        if (counter >= 5) {
            clearInterval(timer);
        }
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});