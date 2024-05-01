const { StatusCodes } = require('http-status-codes');
const { CommentRepository } = require('../repositories');
const { CommentService } = require('../services');

const commentService = new CommentService(new CommentRepository);

async function createComment(req, res, next) {
  try {
    const { userId, text } = req.body;
    if (!userId || !text) {
      throw new Error('Missing required constants: userId or text');
    }
    const commentData = {
      user_id: userId,
      text: text,
      parent_id: req.params.id
    }
    const newComment = await commentService.createComment(commentData);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: `Successfully created comment for answer: ${commentData.parent_id}`,
      error: {},
      data: newComment
    });

  } catch (error) {
    next(error);
  }
}

module.exports = {
  createComment
}