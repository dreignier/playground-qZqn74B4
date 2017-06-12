let database = {
    4: 'gkruger Germany',
    9: ''
};

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (database[id]) {
                resolve(database[id].split(' ')...);
            } else {
                reject();
            }
        }, 100);
    });
}