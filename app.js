var express = require("express");
// pour manipuler des chemins
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require('body-parser')

 var usersRouter = require("./routes/utilisateur");
var categoriesRouter = require("./routes/categories");
var articlesRouter = require("./routes/articles");
var commentairesRouter = require("./routes/commentaires");



var app = express();
console.log("hello man")
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/articles", articlesRouter);
app.use("/Commentaire", commentairesRouter)

module.exports = app;
