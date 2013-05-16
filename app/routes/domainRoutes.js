var reqModel = require('../../lib/requestSchema');


//exports.getUsersDomains = getUsersDomains;
//
/*function getUsersDomains(req, res){
	//TODO how to query for a list of sites
	var dbQuery = reqModel.find( { '$or': [ { 'headers.host':   }, {   } ] }, function (err, docs){res.send(docs);} );
}*/

exports.getDomains = getDomains; 

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
