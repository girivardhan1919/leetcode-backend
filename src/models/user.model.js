const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'UserName cannot be empty'],
  },
  email: {
    type: String,
    required: [true, 'UserEmail cannot be empty'],
  },
  bio: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;