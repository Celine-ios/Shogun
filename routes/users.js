var express = require('express');
var router = express.Router();
var session = require('express-session');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//Checkear si está establecida en la sesión user y passq
  res.render('dashboard', {
  	username: session.username,
  	email: session.email,
  	password: session.password
  });
});
router.get('/adjust', (req, res) => {
	res.render('adjust');
});
router.get('/search', (req, res) => {
	res.render('search');
});
router.post('/search', (req, res) => {
	var data = req.body;
	console.log(data);
	mongoose.connect('mongodb://localhost/shogun');
   var userSchema = mongoose.Schema({
      name: String,
      email: String,
      password: String
      });
	res.send("Hello");
});
router.get('/advertising', (req, res) => {
	res.render('advertising');
});
router.get('/favs', (req, res) => {
	res.render('favs');
});
router.get('/contact', (req, res) => {
	res.render('contact');
});
router.get('/help', (req, res) => {
	res.render('help');
});
router.get('/reviews', (req, res) => {
	res.render('reviews');
});
module.exports = router;
