var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt       = require('bcrypt-nodejs');

// user schema 
var RideOnSchema   = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }, 
    location: {type: "Point", required: true, "coordinates" : [0,0]},
    mail: {type: String, required: true},
    phone: {type : Array, required: true},
    logo: Buffer,
    modulos: []
});

module.exports = mongoose.model('RideOn', RideOnSchema);