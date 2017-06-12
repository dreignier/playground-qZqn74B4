let job = require('./code'),
    mark = require('./mark');

Promise.all([
    testSuccess.apply('1 jsmith USA John Smith jsmith@gmail.com'.split(' ')),
    testSuccess.apply('2 kmartin France Kevin Martin darkwarrior73@msn.fr'.split(' ')),
    testSuccess.apply('3 egringo Mexico Erico Gringo elgringo@gmail.com'.split(' ')),
    testSuccess.apply('4 gkruger Germany Gunter Kruger guntertag@hotmail.com'.split(' ')),
    testError(5, 'Error central'),
    testError(6, 'Error db1'),
    testError(7, 'Error db2'),
    testError(8, 'Error db3'),
    testError(9, 'Error vault')
])

.then(function() {
    console.log('TECHIO> success true');
})

.catch(function() {
    console.log('TECHIO> success false');
});


function testSuccess(id, username, country, firstname, lastname, email) {
    id = +id;

    return new Promise(function(resolve, reject) {
        let promise = job();

        if (!isPromise(promise)) {
            console.error('Test with id', id + ': Result is not a promise');
            reject();
            return;
        }

        let success = false,
            called = false;

        job

        .then(function(data) {
            success = true;

            if (data.id !== id) {
                console.error('Test with id', id + ': The returned id is', data.id, 'but it should be', id);
                success = false;
            }

            if (data.username !== username) {
                console.error('Test with username', username + ': The returned username is', data.username, 'but it should be', username);
                success = false;
            }

            if (data.country !== country) {
                console.error('Test with country', country + ': The returned country is', data.country, 'but it should be', country);
                success = false;
            }

            if (data.firstname !== firstname) {
                console.error('Test with firstname', firstname + ': The returned firstname is', data.firstname, 'but it should be', firstname);
                success = false;
            }

            if (data.lastname !== lastname) {
                console.error('Test with lastname', lastname + ': The returned lastname is', data.lastname, 'but it should be', lastname);
                success = false;
            }

            if (data.email !== email) {
                console.error('Test with email', email + ': The returned email is', data.email, 'but it should be', email);
                success = false;
            }
        })

        .catch(function() {
            console.error('Test with id', id + ': The should be resvoled');
            reject();
        })

        .then(function() {
            called = true;
        });

        setTimeout(function() {
            if (!called) {
                console.error('Test with id', id + ': Code too slow');
                reject();
            } else if (!success) {
                reject();
            } else {
                if (!mark.marked[id]) {
                    console.error('Test with id', id + ': mark service never called');
                    reject();
                } else {
                    console.log('Test with id', id + ': Success')
                    resolve();
                }
            }
        }, 225);
    });
}

function testError(id, error) {
    id = +id;

    return new Promise(function(resolve, reject) {
        let promise = job();

        if (!isPromise(promise)) {
            console.error('Test with id', id + ': Result is not a promise');
            reject();
            return;
        }

        let success = false,
            called = false;

        job

        .then(function() {
            console.error('Test with id', id + ': The returned promise should be rejected with error', error);
            reject();
        })

        .catch(function(data) {
            if (error !== data) {
                console.error('Test with id', id + ': The returned promise should be rejected with error', error);
                reject();
            } else {
                success = true;
            }
        })

        .then(function() {
            called = true;
        });

        setTimeout(function() {
            if (!called) {
                console.error('Test with id', id + ': Code too slow');
                reject();
            } else if (!success) {
                reject();
            } else {
                if (mark.marked[id]) {
                    console.error('Test with id', id + ': mark service called');
                    reject();
                } else {
                    console.log('Test with id', id + ': Success')
                    resolve();
                }
            }
        }, 225);
    });
}

function isPromise(obj) {
    return obj instanceof Promise;
}