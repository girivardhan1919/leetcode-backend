const express = require('express');
const { commentController } = require('../../controllers');

const commentRouter = express.Router();

commentRouter.post('/:id/comments', commentController.createComment);

module.exports = commentRouter;