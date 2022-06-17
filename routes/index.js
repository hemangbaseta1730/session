var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/loginprocess',function(req,res,next) {
  console.log("Login process called");
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = req.body.txt3;
  // session variable create 
  req.session1.myuser = a ;
  req.session2.myuser1 = b;
  req.session3.myuser2 = c;
  // console process data 
  console.log("session value is a"  + req.session1.myuser);
  console.log("session value is b"  + req.session2.myuser1);
  console.log("session value is c"  + req.session3.myuser2);
  
  // redirect on home
  res.redirect('/home');
});

router.get('/home', function(req,res,next) {
  
  // Auth
  if(req.session.myuser){
    // get session value
    var d = req.session.myuser;
    res.render('home',{myuser:d});
  }else{
    res.redirect('/login');
  }

});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err){
    res.redirect('/login');
  });
});


module.exports = router;
