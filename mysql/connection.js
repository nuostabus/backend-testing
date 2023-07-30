const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  database: 'books',
});

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      //wrapping connection.query in a promise
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
