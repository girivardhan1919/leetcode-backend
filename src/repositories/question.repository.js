const { Question } = require('../models');
const NotFound = require('../errors/notfound.error');


class questionRepository {

  async createQuestion(questionData) {
    try {
      const newQuestion = await Question.create({
        title: questionData.title,
        body: questionData.body,
        topics: questionData.topicTags,
        user_id: questionData.userId,
        created_at: new Date()
      });
      return newQuestion;
    } catch (error) {
      throw error;
    }
  }

  async getQuestion(searchText, tag) {
    try {
      const query = {};

      if (searchText) {
        console.log('inside ques repo', searchText);
        query.$or = [
          { title: { $regex: searchText, $options: 'i' } },
          { body: { $regex: searchText, $options: 'i' } }
        ];
      }
      if (tag) {
        query.topics = tag;
      }
      console.log('query--', query);
      const questions = await Question.find(query);
      if (questions.length == 0) {
        throw new NotFound("no data found for the text", "tag");
      }
      return questions;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = questionRepository;