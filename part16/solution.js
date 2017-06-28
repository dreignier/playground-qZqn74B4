let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

// Solution hidden. Unfold this block to see it.
module.exports = function(id) { // autofold
    let dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

    return new Promise(function(resolve, reject) {
        Promise.all([
            central(id)

            .catch(function() {
                return Promise.reject('Error central');
            })

            .then(function(db) {
                return dbs[db](id)

                .catch(function() {
                    return Promise.reject('Error ' + db);
                });
            }),

            vault(id)

            .catch(function() {
                return Promise.reject('Error vault');
            })
        ])

        .then(function(data) {
            mark(id).catch(function() {});

            resolve({
                id: id,
                username: data[0].username,
                country: data[0].country,
                firstname: data[1].firstname,
                lastname: data[1].lastname,
                email: data[1].email
            });
        })

        .catch(function(error) {
            reject(error);
        });
    });
};