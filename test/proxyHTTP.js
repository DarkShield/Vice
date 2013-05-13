
// new proxy

var mitmproxy = require('./../node_modules/vice-mitm-proxy/proxy'),
    processor = require('./proxyHTTPtest');

// Proxy
mitmproxy({proxy_port: 8080, verbose: true}, processor).startServer();

