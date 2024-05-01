const { StatusCodes } = require('http-status-codes');
const { FollowRepository } = require('../repositories');
const { FollowService } = require('../services');

const followService = new FollowService(new FollowRepository);
async function createFollow(req, res, next) {
  try {
    const userId = req.params.userId;
    const targetUserId = req.params.targetUserId;

    if (!userId || !targetUserId) {
      throw new Error('Missing required constants: userId or targetUserId');
    }
    const followData = {
      user_id: userId,
      follow_user_id: targetUserId
    }
    const newFollow = await followService.createFollow(followData);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: `Successfully started following the user ${followData.follow_user_id}`,
      error: {},
      data: newFollow
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFollow
}