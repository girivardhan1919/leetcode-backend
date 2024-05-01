const { StatusCodes } = require('http-status-codes');
const { QuestionService } = require('../services');
const { QuestionRepository } = require('../repositories');
const CustomRequest = require('../errors/customRequest.error.js');

const questionService = new QuestionService(new QuestionRepository);

async function createQuestion(req, res, next) {
  try {
    const newQuestion = await questionService.createQuestion(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully create the question',
      error: {},
      data: newQuestion
    })
  } catch (error) {
    next(error);
  }
}

async function getQuestion(req, res, next) {
  try {
    const searchText = req.query.text;
    const tag = req.query.tag;
    console.log("inside controleer", searchText, "--", tag);
    if (!searchText && !tag) {
      throw new CustomRequest("Search text and tag are required");
    }
    console.log('jjj');
    const question = await questionService.getQuestion(searchText, tag);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the question",
      error: {},
      data: question
    })

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  createQuestion, getQuestion
};