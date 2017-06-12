let job = require('code'),
    mark = require('mark');

Promise.all([
    testSuccess('1 jsmith USA John Smith jsmith@gmail.com'.split(' ')...),
    testSuccess('2 kmartin France Kevin Martin darkwarrior73@msn.fr'.split(' ')...),
    testSuccess('3 egringo Mexico Erico Gringo elgringo@gmail.com'.split(' ')...),
    testSuccess('4 gkruger Germany Gunter Kruger guntertag@hotmail.com'.split(' ')...),
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


function testSuccess(id, username, contry, firstname, lastname, email) {
    return new Promise(function(resolve, reject) {
    });
}

function testError(id, error) {
    return new Promise(function(resolve, reject) {
    });
}