let database = {
    3: 'egringo Mexico',
};

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (database[id]) {
                let data = database[id].split(' ');
                resolve({
                    username: data[0],
                    country: data[1]
                });
            } else {
                reject();
            }
        }, 100);
    });
}