const { Answer } = require('../models');


class answerRepository {

  async createAnswer(answerData) {
    try {
      console.log(answerData);
      const newAnswer = await Answer.create({
        text: answerData.text,
        user_id: answerData.user_id,
        question_id: answerData.question_id,
        created_at: new Date(),
      });
      return newAnswer;
    } catch (error) {
      throw (error);
    }
  }

  async updateAnswer(id, updatedAnswerData) {
    try {
      console.log(updatedAnswerData);
      const updatedAnswer = await Answer.findByIdAndUpdate(id, { text: updatedAnswerData }, { new: true });
      return updatedAnswer;
    } catch (error) {
      throw (error);
    }
  }


}

module.exports = answerRepository;