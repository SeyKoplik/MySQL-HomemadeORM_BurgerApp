require('dotenv').config();

const mysql = require("mysql");

//code to connect Node to MySQL
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burger_db"
});
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to database as ID:" + connection.threadId + "\n");
    // whatToDoFirst();
});


//export the connection
module.exports = connection;