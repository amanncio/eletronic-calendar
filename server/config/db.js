const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'amancio',
  password : 'amancio',
  database : 'eletronic_calendar'
});

module.exports = db;