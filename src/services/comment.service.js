
class commentService {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  async createComment(commentData) {
    const newComment = await this.commentRepository.createComment(commentData);
    return newComment;
  }



}

module.exports = commentService;