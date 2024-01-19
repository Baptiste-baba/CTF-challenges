var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  Password: String,
  role:{
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  hash: String,
  salt: String
}, {timestamps: true});

mongoose.model('User', UserSchema);