const express = require('express');
const { questionController, answerController } = require('../../controllers');


const questionRouter = express.Router();

questionRouter.post('/', questionController.createQuestion);
questionRouter.get('/search', questionController.getQuestion);
questionRouter.post('/:id/answers', answerController.createAnswer);

module.exports = questionRouter;