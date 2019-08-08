// Import ORM
var orm = require("../config/orm.js");

// Calling ORM functions 
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insert("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export database functions for controller
module.exports = burger;