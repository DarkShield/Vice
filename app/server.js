var express = require('express');
var domainRoutes = require('./routes/domainRoutes');
var app = express();
var mongoose = require('mongoose');

//middleware order matters
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'SuperSecretKeyForNow' }));

//routes
app.get('/domains', domainRoutes.getDomains);

app.post('/domains/info', domainRoutes.drillDown);
app.post('/domains/attacks', domainRoutes.getAttacks);

app.post('/dashboard', function (req, res) {
	'use strict';
	domainRoutes.getAuth(req, res);
});

app.get('/assets', domainRoutes.IsAuthenticated, function(req, res, next){
	'use strict';
	res.redirect('/assets/dashboard.html');
});

module.exports = app;
