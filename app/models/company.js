var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt       = require('bcrypt-nodejs');

// user schema 
var CompanySchema   = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }, 
    location: { type: Array, required: true, },
    mail: {type: String, required: true},
    phone: {type : Array, required: true},
    logo: Buffer,
    modulos: []
});

module.exports = mongoose.model('Company', CompanySchema);