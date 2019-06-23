const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 name: {
  type: String,
  trim: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 },
 subscribed: {
     type: Array, default: []
 },
 isHash: {type: Boolean, default: false}
}, {collection: "Users", usePushEach: true});


// hash user password before saving into database
UserSchema.pre('save', function(next){
    if(!this.isHash) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    }
    this.isHash = true
    next();
});


module.exports = mongoose.model('User', UserSchema);

