class TopicService {

  constructor(topicRepository) {
    this.topicRepository = topicRepository;
  }

  async createTopic(topic) {
    const newTopic = await this.topicRepository.createTopic(topic);
    return newTopic;
  }

  async getAllTopics() {
    const topics = await this.topicRepository.getAllTopics();
    return topics;
  }
}

module.exports = TopicService;