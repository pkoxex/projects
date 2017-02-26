var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysqlUBU',
  database : 'unilever'
});

connection.connect();

connection.query('SELECT * from brand', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
