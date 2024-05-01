
class answerService {

  constructor(answerRepository) {
    this.answerRepository = answerRepository;
  }

  async createAnswer(answerData) {
    const newAnswer = await this.answerRepository.createAnswer(answerData);
    return newAnswer;
  }

  async updateAnswer(answerId, updatedAnswerData) {
    const updatedAnswer = await this.answerRepository.updateAnswer(answerId, updatedAnswerData);
    return updatedAnswer;
  }
}

module.exports = answerService;