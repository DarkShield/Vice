var mitmproxy = require('./proxyserver');
var mongoose = require('mongoose');
mongoose.connect('10.192.198.253', 'vicetest');

var proxy = mitmproxy({proxy_port: 80, verbose: true});

proxy.startServer();
