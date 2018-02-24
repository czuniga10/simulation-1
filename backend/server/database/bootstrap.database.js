const massive = require('massive');
const connectionString = 'postgres://zgwaqygjvzbwgr:a00d8fcbb808ddda81d9a4446994e74f7f8d7cfc91ac4287717cc0880fa797e6@ec2-23-21-85-76.compute-1.amazonaws.com:5432/ddtkej1luua2fo?ssl=true';
let db;

massive(connectionString)
    .then( dbInstance => {
        db = dbInstance;
        messageString = 'Connection to the database was successful.';
        return dbInstance.init();
    })
    .catch( err => {
        throw err;
    });

    function getDb() {
        if(!db) {
            messageString = 'We have not connected to the database yet!';
            console.error(messageString);
            return messageString;
        }

        return db;
    }

    module.exports = getDb;