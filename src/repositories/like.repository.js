const { Like } = require("../models");

class likeRepository {
  async createLike(likeData) {
    try {

      const newLike = await Like.create({
        user_id: likeData.user_id,
        like_type: likeData.like_type,
        like_types_id: likeData.like_types_id,
        created_at: new Date()
      });
      return newLike;

    } catch (error) {
      throw (error);
    }
  }
}

module.exports = likeRepository;