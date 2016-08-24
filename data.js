var MDB = require('../../node_modules/monetdb')();

var options = {
  host     : '129.241.107.186',
  port     : 50000,
  dbname   : 'ctt',
  user     : 'co2',
  password : 'ctt'
};

var conn = new MDB(options);
conn.open();
conn.query('SELECT * FROM node_msg WHERE euid == 02032201').then(function(result) {
  console.log(result);
});
conn.close();
