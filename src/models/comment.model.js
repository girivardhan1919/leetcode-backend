const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  },
  text: {
    type: String,
    required: [true, 'Comment cannot be empty']
  },
  created_at: {
    type: Date,
    def: Date.now
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;