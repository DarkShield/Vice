//db.js
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Site = new Schema({
    domain    : String,
    ip    : String,
    user : String
});
 
mongoose.model( 'Site', Site );
 
mongoose.connect( 'localhost', 'Vice' );