const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'vinisavordelli',
  password: 'Bisteca2018@',
  database: 'model_example',
  host: 'localhost',
});

module.exports = connection;
