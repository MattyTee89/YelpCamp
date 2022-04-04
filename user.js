const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
//you would think that you would specify password and username in this section aswell but we with
//passport we actually do this.

UserSchema.plugin(passportLocalMongoose);
//passport adds the username and password Schemes for us.
//so this will actually make it so that people can have the same usernames
//we plug the email in and then specify the other forms of id in passport.

module.exports = mongoose.model('User', UserSchema);
