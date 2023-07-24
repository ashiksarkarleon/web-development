var mysql = require('mysql');

var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb'
    });
connection.connect(function(err){
    if(err) {
        return err;
    }
    console.log('connection success');
});
module.exports = connection;