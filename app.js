// const { apply} =require ("./routes/seeds/seed");
var express = require("express");
// pour manipuler des chemins
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require('body-parser')
var cors = require('cors')









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
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type", 
 " Accept, x-client-key", "x-client-token", "x-client-secret", "Authorization");
    next();
 
});
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/articles", articlesRouter);
app.use("/Commentaire", commentairesRouter)



module.exports = app;
