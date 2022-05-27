var express = require("express");
// pour manipuler des chemins
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

 var usersRouter = require("./routes/utilisateur");
// var categoriesRouter = require("./routes/categories");
// var articlesRouter = require("./routes/articles");
// var commentairesRouter = require("./routes/commentaires");


var app = express();
console.log("hello man")
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
// app.use("/categories", categoriesRouter);

module.exports = app;
