var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard/index');
});

router.get('/user', function(req, res, next) {
  res.send('respond with user ');
});

module.exports = router;
