const { Follow } = require("../models");

class followRepository {
  async createFollow(followData) {
    try {

      const newFollow = await Follow.create({
        user_id: followData.user_id,
        follow_user_id: followData.follow_user_id,
        created_at: new Date()
      });
      return newFollow;

    } catch (error) {
      throw (error);
    }
  }
}

module.exports = followRepository;