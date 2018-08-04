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
   var user = req.body;
   if (!user.email && !user.password) {
      res.render('login', {
         status: 'void'
      });
   } else {
      if (!user.email) {
         res.render('login', {
         status: 'e-void'
         });
      } else {
         if (!user.password) {
            res.render('login', {
               status: 'p-void'
            });
         }
      }
   }

   mongoose.connect('mongodb://localhost/shogun');
   var userSchema = mongoose.Schema({
      name: String,
      email: String,
      password: String
      });
      var User = mongoose.model('User', userSchema);
      var result = User.find({$and: [
            {"email": user.email}, {"password": user.password}
         ]}, (err, response) => {
            if (response) {
               if (response.length == 0) {
                  res.render('login', {
                     status: 'logout'
                  });
               } else {
                  res.render('dashboard', {
                     status: 'logged',
                     user: {
                        name: response[0].name,
                        email: response[0].email,
                        password: response[0].password
                     }
                  });
                  console.log(response);
               }
               
            } else {
               res.render('login', {
                  status: 'db-error',
                  details: err
               })
            }
            
         });
      

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
