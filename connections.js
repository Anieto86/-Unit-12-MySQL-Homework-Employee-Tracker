const util = require('util');
const mysql = require('mysql');


const connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password : "123456789",
database:"employees"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("no connect");
});

connection.query = util.promisify(connection.query);

module.exports = connection;
