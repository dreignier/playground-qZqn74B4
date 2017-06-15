function job(index) {
    return new Promise(function(resolve) {
        setTimeout(resolve, 100, 'success ' + index);
    });
}

let array = [job(1), job(2), job(3), job(4), job(5)];

let promise = array.reduce(function(previous, current) {
    return previous.then(function(previousData) {
        return current.then(function(currentData) {
            return previousData + ' ' + currentData;
        });
    });
}, Promise.resolve('')); // We start with an auto-resolved promise to start the chain

promise

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.error('One of the promise is rejected', error);
});
