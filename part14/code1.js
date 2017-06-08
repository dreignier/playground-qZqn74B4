function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('done ' + delay);
        }, delay);
    });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    data.forEach(function(text) {
        console.log(text);
    });
});