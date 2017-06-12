let database = {
    3: 'egringo Mexico',
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