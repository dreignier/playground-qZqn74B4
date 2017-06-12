let database = {
    3: 'egringo Mexico',
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