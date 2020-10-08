// impore connection.js into here
const connection = require('./connection.js');


// create the method that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database
var orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        console.log("$$$$$$$$$$")
        console.log(queryString);
        
        // ==================
        // how to grab all the burgers from the database
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table + cols + "VALUES " + vals;

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (table, cols, condition, cb) {
        let queryString = "UPDATE " + table + " SET " + cols + " WHERE " + condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;