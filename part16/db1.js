let database = {
    1: 'jsmith USA',
    2: 'kmartin France'
};

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        let self = this;

        setTimeout(function() {
            if (database[id]) {
                resolve.apply(self, database[id].split(' '));
            } else {
                reject();
            }
        }, 100);
    });
}