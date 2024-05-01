const { Topic } = require('../models');

class TopicRepository {
  async createTopic(topic) {
    try {
      const newTopic = Topic.create({
        name: topic.name
      });
      return newTopic;
    } catch (error) {
      throw error;
    }
  }

  async getAllTopics() {
    try {
      console.log('jjj');
      const topics = await Topic.find({});
      return topics;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TopicRepository;