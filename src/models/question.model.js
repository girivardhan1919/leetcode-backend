const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'QuestionTitle cannot be Empty']
  },
  body: {
    type: String,
    required: [true, 'QuestionBody cannot be empty']
  },
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
  }],
  created_at: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;