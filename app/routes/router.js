var fs = require('fs'),
    userM = require('../model/user'),
    reqModel = require('../../lib/requestSchema');

exports.login = function (req, res) {
  res.sendfile('./public/html/login.html');
}


exports.dashboard = getAuth;

function getAuth(req, res){
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
  userM.getAuthenticated(username, password, respond);
}


exports.domains = getDomains; 

function getDomains(req, res){
   var uniques = reqModel.distinct('headers.host',{},function(err, docs){
      var resdocs = [];
      for (var i = 0; i <= docs.length; i++){
         var domObj = {name: docs[i]};
         resdocs.push(domObj);
      }
      res.send(resdocs);
   });
}

exports.domains.info = drillDown;

function drillDown(req, res){
   var domainName = req.body.name;
   //console.log(domainName);
   var dbQuery = reqModel.find({'headers.host': domainName}, function (err, docs){res.send(docs);});
   //res.send(dbReqs);
}

exports.domains.attacks = getAttacks;
function getAttacks(req, res){
   var domainName = req.body.name;
   var dbQuery = reqModel.find({'headers.host': domainName, 'attack': 'true'}, function (err, docs){res.send(docs);});
}
