var express = require('express');
var domainRoutes = require('./routes/domainRoutes');

var app = express();

//middleware order matters
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

//routes
app.get('/domains', domainRoutes.getDomains);

app.post('/domains/info', domainRoutes.drillDown);
app.post('/domains/attacks', domainRoutes.getAttacks);

module.exports = app;
