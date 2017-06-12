let database = {
    1: 'db1',
    2: 'db1',
    3: 'db2',
    4: 'db3',
    6: 'db1',
    7: 'db2',
    8: 'db3',
    9: 'db3'
};

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (database[id]) {
                resolve(database[id]);
            } else {
                reject();
            }
        }, 100);
    });
}