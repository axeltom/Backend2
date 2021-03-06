const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'db4free.net',
    user: 'axeltom',
    password: '12345678',
    database: 'eventosaxel'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mc.on('error', function(err) {
  console.log("[mysql error]",err);
});
var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
