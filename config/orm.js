// Import MySql connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // add quotes to a string if there are spaces between words
            if (typeof value == "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single string separated by commas
    return arr.toString();
}

// Object for all our SQL statement functions
var orm = {

    // Select all
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Insert One
    insert: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update One
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += "SET ";
        queryString += objtoSql(objColVals);
        queryString += "WHERE ";
        queryString += contion;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export orm object for model
module.exports = orm;