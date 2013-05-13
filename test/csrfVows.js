var vows = require('vows'),
    assert = require('assert'),
    csrf = require('./../lib/waf/lib/inspectors/csrf');

vows.describe('csrf inspector').addBatch({
    'when including csrf inspector':{
        topic: csrf,
        'we get a object': function(topic){
            assert.isObject(csrf);
        },
        'it has a check method': function(){
            assert.isFunction(csrf.check);
        }
    },
    'when calling the check method':{
        topic: function(){
            var req ={
                method: 'POST',
                headers: {
                    host: 'urbanhydros.org',
                    referer: 'www.mattjay.com'
                }
            }
            csrf = csrf.check(req);
            return csrf;
        },
        'csrf is still and object':function(topic){
            assert.isObject(csrf);
            assert.isObject(topic);
        }
    }
}).export(module);