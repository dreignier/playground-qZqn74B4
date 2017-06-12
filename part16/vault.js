let database = {
    1: 'John Smith jsmith@gmail.com',
    2: 'Kevin Martin darkwarrior73@msn.fr',
    3: 'Erico Gringo elgringo@gmail.com',
    4: 'Gunter Kruger guntertag@hotmail.com',
    6: 'Martine Dupont mdupont@yahoo.fr',
    7: 'Martinez Dupont martinez@lycoz.fr',
    8: 'Holly Molly holmol@gmail.com'
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
        }, 150);
    });
}