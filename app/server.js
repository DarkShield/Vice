var express = require('express');
var mongoose = require('mongoose');

var app = express();
var Routes = require('./routes/router');

//middleware order matters
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'SuperSecretKeyForNow' }));

//routes
app.get('/domains', Routes.domains);
app.get('/login', Routes.login);

app.post('/dashboard', Routes.dashboard);
app.post('/domains/info', Routes.domains.info);
app.post('/domains/attacks', Routes.domains.attacks);

module.exports = app;
