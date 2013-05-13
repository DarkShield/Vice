var mitmproxy = require('./proxyserver');

var proxy = mitmproxy({proxy_port: 8888, verbose: true});

proxy.startServer();
