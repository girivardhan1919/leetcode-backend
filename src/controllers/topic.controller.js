const { StatusCodes } = require('http-status-codes');
const { TopicService } = require('../services');
const { TopicRepository } = require('../repositories');

const topicService = new TopicService(new TopicRepository);

async function createTopic(req, res, next) {
  try {
    const newTopic = await topicService.createTopic(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created the topic",
      error: {},
      data: newTopic
    })
  } catch (error) {
    next(error);
  }
}

async function getAllTopics(req, res, next) {
  try {
    console.log('gg');
    const topics = await topicService.getAllTopics();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the all topics",
      error: {},
      data: topics
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTopic, getAllTopics
};