const express = require('express');
const { answerController, commentController } = require('../../controllers');

const answerRouter = express.Router();

answerRouter.put('/:id', answerController.updateAnswer);
answerRouter.post('/:id/comments', commentController.createComment);

module.exports = answerRouter;