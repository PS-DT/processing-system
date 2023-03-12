const mysql = require('mysql');

const connection = mysql.createConnection({
  host: `database-1.c1f7ihofuiya.us-east-1.rds.amazonaws.com`,
  user: `admin`,
  password: `UtAustin1300`,
  port: `3306`,
});

module.exports = function (params) {
  connection.connect(function (err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });
  // connection.end();
}


