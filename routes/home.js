var express = require('express');
var router = express.Router();

/* GET our articles */
router.get('/', function(req, res, next) {
  res.send('You are in the home');
});

module.exports = router;
