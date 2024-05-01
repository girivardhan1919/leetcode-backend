class questionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }

  async createQuestion(questionData) {
    const newQuestion = await this.questionRepository.createQuestion(questionData);
    return newQuestion;
  }

  async getQuestion(searchText, tag) {
    console.log("inside ques servie", searchText, "--", tag);
    const questions = await this.questionRepository.getQuestion(searchText, tag);
    return questions;
  }
}

module.exports = questionService;