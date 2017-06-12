let database = {
    1: 'jsmith USA',
    2: 'kmartin France'
};

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        let self = this;

        setTimeout(function() {
            if (database[id]) {
                let data = database[id].split(' ');
                resolve.apply(self, {
                    username: data[0],
                    country: data[1]
                });
            } else {
                reject();
            }
        }, 100);
    });
}