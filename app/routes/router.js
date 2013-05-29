var User = require('../model/user'),
    RequestStore = require('../../lib/requestSchema');

exports.loginpage = function loginpage (req, res) {
  res.sendfile('./public/html/login.html');
}


exports.login = function authenticate (req, res) {
  var username = req.param('username');
  var password = req.param('password');
  var respond = function (err, user, reason) {
    if (user !==null){
      req.session.user = user;
      res.sendfile('./routes/html/dashboard.html');
    } else {
      res.redirect('/login?' + reason + '&' + err );
    }
  }
  User.getAuthenticated(username, password, respond);
}


exports.domains = function getDomains(req, res){
   RequestStore.distinct('headers.host',{},function(err, docs){
      var resdocs = [];
      for (var i = 0; i <= docs.length; i++){
         var domObj = {name: docs[i]};
         resdocs.push(domObj);
      }
      res.send(resdocs);
   });
}

exports.domains.info = function getDomainData (req, res){
   var domainName = req.body.name;
   var respond = function (err, docs){
     res.send(docs);
   }
   RequestStore.find({'headers.host': domainName}, respond);
}

exports.domains.attacks = function getDomainAttacks(req, res){
   var domainName = req.body.name;
   var respond = function (err, docs) {
     res.send(docs);
   }
   RequestStore.find({'headers.host': domainName, 'attack': 'true'},respond);
}
