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
        setTimeout(function() {
            if (database[id]) {
                let data = database[id].split(' ');
                resolve({
                    firstname: data[0],
                    lastname: data[1],
                    email: data[2]
                });
            } else {
                reject();
            }
        }, 150);
    });
}