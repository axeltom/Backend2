'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'db4free.net',
    user     : 'axeltom',
    password : '12345678',
    database : 'eventosaxel'
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.on('error', function(err) {
    console.log("[mysql error]",err);
});

module.exports = connection;
