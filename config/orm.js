// impore connection.js into here
const connection = require('./connection.js');


// create the methose that will execute the necessary MySQL commands in the controllers. These are the methodes you will need to use in order to retrieve and store data in your database
const orm = {
    selectAll: function (tableInput, callback) {
        const queryString = "SELECT * FROM ? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;

            callback(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;

        //================
        //how to get enter the kind of burger into the database
        //=== THIS IS CATS APP
        // queryString += " (";
        // queryString += cols.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length);
        // queryString += ") ";

        // console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;

        //================
        //how to get enter the kind of burger into the database
        //=== THIS IS CATS APP

        // queryString += " SET ";
        // queryString += objToSql(objColVals);
        // queryString += " WHERE ";
        // queryString += condition;

        // console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;