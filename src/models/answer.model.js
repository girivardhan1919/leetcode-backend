const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  text: {
    type: String,
    required: [true, 'Answer cannot be empty']
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

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;