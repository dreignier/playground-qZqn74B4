let marked = {};

module.exports = function(id) {
    module.exports.marked[id] = true;

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (id === 4) {
                reject();
            } else {
                resolve();
            }
        }, 100);
    });
}

module.exports.marked = marked;