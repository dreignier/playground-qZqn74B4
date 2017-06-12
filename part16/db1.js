let database = {
    1: 'jsmith USA',
    2: 'kmartin France'
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