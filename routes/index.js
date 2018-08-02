var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
	res.render('login');
});
router.get('/signup', function(req, res, next) {
	res.render('signup');
});
router.post('/login', function(req, res){
   console.log(req.body);
   res.send("received your request!");
});
router.post('/signup', function(req, res){
   console.log(req.body);
   res.send("received your request!");
});

module.exports = router;
