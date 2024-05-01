const { User } = require('../models');
const NotFound = require('../errors/notfound.error');


class userRepository {
  async createUser(userData) {
    try {
      console.log('inside user repo', userData);
      const user = await User.create({
        username: userData.username,
        email: userData.email,
        bio: userData.bio ? userData.bio : null
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new NotFound("User ", id);
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const updatedUserDetails = await User.findByIdAndUpdate(id, userData, { new: true });
      if (!updatedUserDetails) {
        throw new NotFound("User ", id);
      }
      return updatedUserDetails;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = userRepository;