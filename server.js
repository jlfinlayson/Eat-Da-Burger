// Require Express Package
var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

// Express
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.use(express.static(path.join(__dirname, '/public')));

// Start Server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});