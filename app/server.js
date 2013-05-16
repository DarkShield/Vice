var express = require('express');
var domainRoutes = require('./routes/domainRoutes');

var app = express();

//middleware order matters
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

//routes
app.get('/domains', function (req, res) {
	'use strict';
	domainRoutes.getDomains(req, res);
});

app.post('/domains/info', function (req, res) {
    'use strict';
    domainRoutes.drillDown(req, res);
});
app.post('/domains/attacks', function (req, res) {
   'use strict';
   domainRoutes.getAttacks(req, res);
});

module.exports = app;
