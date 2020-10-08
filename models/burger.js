//Import ORM to create functions to interact with DB
const orm = require('../config/orm.js');


// code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", "devoured = 1", condition, function(res) {
            cb(res);
        });
    }
};



// module.exports the database functions for the controller (burgers_controller.js)
module.exports = burger;



