// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express
var app = express();
var PORT = process.env.PORT || 3000;

//models folder
var db = require("./models");

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
var router = require('./controllers/character-controller.js');
app.use('/', router);
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// listen for server
db.sequelize.sync().then(function() { //  <<------ REMOVE FORCE WHEN DB IS SETUP { force: true }
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
