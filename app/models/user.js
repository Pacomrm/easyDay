var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Company      = require('./company');
var bcrypt       = require('bcrypt-nodejs');

// user schema 
var UserSchema   = new Schema({
    name: String,
    lastname: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }, 
    _company: [Company],
    vehicle: {  plate: String,
                maxPassengers : Number,
                Marca: String,
                Color: String
                },
    mail: {type : String},
    phone: [],
    superUser: {type : Boolean}
});


 
// hash the password before the user is saved
UserSchema.pre('save', function(next) {
    var user = this;

    // hash the password only if the password has been changed or user is new
    if (!user.isModified('password')) return next();

    // generate the salt
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) return next(err);

        // change the password to the hashed version
        user.password = hash;
        next();
    });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);