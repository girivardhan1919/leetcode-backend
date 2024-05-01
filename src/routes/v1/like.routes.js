const express = require('express');
const { answerController, commentController, likeController } = require('../../controllers');

const likeRouter = express.Router();

likeRouter.put('/:type/:id/likes', likeController.createLike);

module.exports = likeRouter;