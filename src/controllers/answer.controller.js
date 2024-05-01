const { StatusCodes } = require('http-status-codes');
const { AnswerService } = require('../services');
const { AnswerRepository } = require('../repositories');

const answerService = new AnswerService(new AnswerRepository);

async function createAnswer(req, res, next) {
  try {

    const questionId = req.params.id;
    const { userId, text } = req.body;

    if (!userId || !text) {
      throw new Error('Missing required constants: userId or text');
    }

    const answerData = {
      user_id: userId,
      text: text,
      question_id: questionId
    };

    console.log('data: ', answerData);
    const newAnswer = await answerService.createAnswer(answerData);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully answered to the question',
      error: {},
      data: newAnswer
    });
  } catch (error) {
    next(error);
  }
}

async function updateAnswer(req, res, next) {
  try {
    const answerId = req.params.id;
    const { text } = req.body;
    if (!text) {
      throw new Error('Missing required constants: text');
    }
    let updatedAnswerData = text;
    const updatedAnswer = await answerService.updateAnswer(answerId, updatedAnswerData);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully updated the answer for the answer id: ${answerId}`,
      error: {},
      data: updatedAnswer
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAnswer, updateAnswer
}