const mongoose = require('mongoose');

const followSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'User Id cannot be empty']
  },
  follow_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Follow user id cannot be empty']
  },
  created_at: {
    type: Date,
    def: Date.now
  }

});
const Follow = mongoose.model('Follow', followSchema);
module.exports = Follow;