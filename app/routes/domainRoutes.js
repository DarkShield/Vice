var fs = require('fs'),
    userM = require('../model/user'),
    reqModel = require('../../lib/requestSchema');

//exports.getUsersDomains = getUsersDomains;
//
/*function getUsersDomains(req, res){
	//TODO how to query for a list of sites
	var dbQuery = reqModel.find( { '$or': [ { 'headers.host':   }, {   } ] }, function (err, docs){res.send(docs);} );
}*/

exports.getAuth = getAuth;

function getAuth(req, res){
	userM.getAuthenticated(req.param('username'), req.param('password'), function(err, user, reason){
		if (user !== null) {
			req.session.user = user;
			res.redirect('/assets');
			//res.sendfile('./assets/dashboard.html');

			/*fs.readFile('./static/html/dashboard.html', function(err, content) {
				if (err){
					res.status(404);
					console.log(err);
				}
				else {
					res.status(200);
					console.log('success');
				}
			});*/
		}
		else {
			console.log('user: '+user);
			console.log('error: '+err);
			console.log('reason: '+reason);
		}
	});	
}

exports.IsAuthenticated = IsAuthenticated;

function IsAuthenticated(req, res, next){
	if(req.session.user){
		next();
	}else{
		next(new Error(401));
	}
}

exports.getDomains = getDomains; 

function getDomains(req, res){
   /*var uniques = reqModel.distinct('headers.host',{},function(err, docs){
      var resdocs = [];
      for (var i = 0; i <= docs.length; i++){
         var domObj = {name: docs[i]};
         resdocs.push(domObj);
      }
      res.send(resdocs);
   });*/
	res.send(req.session.user.sites);
}

exports.drillDown = drillDown;

function drillDown(req, res){
   var domainName = req.body.name;
   //console.log(domainName);
   var dbQuery = reqModel.find({'headers.host': domainName}, function (err, docs){res.send(docs);});
   //res.send(dbReqs);
}

exports.getAttacks = getAttacks;
function getAttacks(req, res){
   var domainName = req.body.name;
   var dbQuery = reqModel.find({'headers.host': domainName, 'attack': 'true'}, function (err, docs){res.send(docs);});
}
