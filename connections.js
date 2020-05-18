const util = require('u til');
const mysql = require('mysql');

const connection = mysql.connection({
host: "localhost",
user: "root",
password: "",
database: "",

});

connection.connect();

module.exports = connection;
