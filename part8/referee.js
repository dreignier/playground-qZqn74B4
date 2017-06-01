let start = now(),
    promise = require('./code.js')(),
    success = true
    called = false;

if (!promise) {
    success = false;
    console.log('TECHIO> message The result is falsy');
} else if (!isObject(promise)) {
    success = false;
    console.log('TECHIO> message The result is not an object');
} else if (!isFunction(promise.then)) {
    success = false;
    console.log('TECHIO> message The result is not a promise');
}

promise.then(function(data) {
    if (data !== 'hello world') {
        success = false;
        console.log('TECHIO> message Data is not "hello world"');
    } else {
        let time = now() - start;

        if (time < 1800) {
            success = false;
            console.log('TECHIO> message Promise resolved to early');
        } else if (time > 2200) {
            success = false;
            console.log('TECHIO> message Promise resolved to late');
        }
    }

    called = true;
});

setTimeout(function() {
    if (!called) {
        success = false;
        console.log('TECHIO> message Promise never resolved');
    }

    console.log('TECHIO> success ' + success);
}, 2300);

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