var express = require('express');
var mongoose = require('mongoose');
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
   var user = req.body;
   if(!user.name || !user.email || !user.password) {
   		res.render('signup', {
   			status: 'formError'
   		});
   } else {

   		mongoose.connect('mongodb://localhost/shogun');

   		var userSchema = mongoose.Schema({
		name: String,
		email: String,
		password: String
		});

		var User = mongoose.model('User', userSchema);

   		var newUser = new User({
   			name: user.name,
   			email: user.email,
   			password: user.password
   		});
   		newUser.save((err, User) => {
   			if(err) {
   				res.render('signup', {
   					status: 'error',
   					details: err
   				});
   			} else {
   				/*res.render('dashboard', {
   					status: 'new',
   					user: user
   				});*/
   				res.send('All OK');
   			}
   		});
   }
});

module.exports = router;
