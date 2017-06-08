let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1.catch(function() {}), p2.catch(function() {}), p3.catch(function() {}), p4.catch(function() {}), p5.catch(function() {})]);

promise

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});
