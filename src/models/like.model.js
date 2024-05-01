const mongoose = require('mongoose');

const likeSchema = mongoose.mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User Id cannot be empty']
  },
  like_type: {
    type: String,
    enum: ['question', 'answer', 'comment'],
    required: [true, 'Like type cannot be empty']
  },
  like_types_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Like type id cannot be empty']
  },
  created_at: {
    type: Date,
    def: Date.now
  }
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;