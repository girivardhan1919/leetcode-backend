const { Comment } = require('../models');

class commentRepository {
  async createComment(commentData) {
    try {
      const newComment = await Comment.create({
        parent_id: commentData.parent_id,
        user_id: commentData.user_id,
        text: commentData.text,
        created_at: new Date()
      });
      return newComment;
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = commentRepository;