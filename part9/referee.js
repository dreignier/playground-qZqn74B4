let job = require('./code.js');

test('test', 0, false, 'error')

.then(function() {
    return test(3, 1000, true, 'odd');
})

.then(function() {
    return test(6, 2000, true, 'even');
})

.then(function() {
    console.log('TECHIO> success true');
})

.catch(function() {
    console.log('TECHIO> success false');
});


function test(value, delay, resolved, expected) {
    return new Promise(function(resolve, reject) {
        console.log('TECHIO> message Testing with data ' + value + ' (' + (typeof value) + ')');

        var start = now(),
            promise = job(value),
            success = false,
            finished = false;

        if (!isPromise(promise)) {
            console.log('TECHIO> message Result is not a promise');
            reject();
            return;
        }

        promise

        .then(function(data) {
            if (resolved) {
                if (data === expected) {
                    if (Math.abs(now() - start - delay) < 200) {
                        success = true;
                    } else {
                        console.log('TECHIO> message Promise is resolved too soon or too late');
                    }
                } else {
                    console.log('TECHIO> message Given data is ' + data + ' but it should be ' + expected);
                }
            } else {
                console.log('TECHIO> message Promise is resolved but it should be rejected');
            }
        })

        .catch(function(data) {
            if (!resolved) {
                if (data === expected) {
                    if (Math.abs(now() - start - delay) < 200) {
                        success = true;
                    } else {
                        console.log('TECHIO> message Promise is rejected too soon or too late');
                    }
                } else {
                    console.log('TECHIO> message Given data is ' + data + ' but it should be ' + expected);
                }
            } else {
                console.log('TECHIO> message Promise is rejected but it should be resolved');
            }
        })

        .then(function() {
            finished = true;
        })

        setTimeout(function() {
            if (!finished) {
                console.log('TECHIO> message Promise never resolved or rejected');
            }

            if (success) {
                resolve();
            } else {
                reject();
            }
        }, delay + 100);
    });
}


function isPromise(obj) {
    return isObject(obj) && isFunction(obj.then) && isFunction(obj.catch);
}

function isObject(obj) {
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function isFunction(obj) {
    let type = typeof obj;
    return type === 'function' && !!obj;
}

function now() {
    return new Date().getTime();
}