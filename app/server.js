var express = require('express');
var domainRoutes = require('./routes/domainRoutes');
var app = express();
var mongoose = require('mongoose');

//app.configure(function() {
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({ secret: 'SuperSecretKeyForNow' }));
	app.use(express.static(__dirname + '/static'));
//});

app.get('/domains', function (req, res) {
	'use strict';
	domainRoutes.getDomains(req, res);
});

app.post('/dashboard', function (req, res) {
	'use strict';
	domainRoutes.getAuth(req, res);
});

app.post('/domains/info', function (req, res) {
    'use strict';
    domainRoutes.drillDown(req, res);
});
app.post('/domains/attacks', function (req, res) {
   'use strict';
   domainRoutes.getAttacks(req, res);
});

mongoose.connect('10.192.198.253', 'vicetest');
app.listen(1337);
