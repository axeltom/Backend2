'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '10.129.5.167',
    user     : 'root',
    password : '',
    database : 'eventos'
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.on('error', function(err) {
    console.log("[mysql error]",err);
});

module.exports = connection;
