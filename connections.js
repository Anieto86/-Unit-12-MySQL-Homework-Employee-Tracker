const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
database:" employees"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("no connect");
});

module.exports = connection;
