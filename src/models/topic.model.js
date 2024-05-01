const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'TopicName cannot be empty']
  }
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;