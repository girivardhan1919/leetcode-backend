const { StatusCodes } = require('http-status-codes');
const { LikeRepository } = require('../repositories');
const { LikeService } = require('../services');

const likeService = new LikeService(new LikeRepository);
async function createLike(req, res, next) {
  try {
    const likeType = req.params.type;
    const likeTypesId = req.params.id;
    const { userId } = req.body;
    if (!userId || !likeType || !likeTypesId) {
      throw new Error('Missing required constants: userId or likeType or likeTypesId');
    }
    const likeData = {
      user_id: userId,
      like_type: likeType,
      like_types_id: likeTypesId
    }

    const newLike = await likeService.createLike(likeData);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: `Successfully liked for ${likeData.like_type}: ${likeData.like_types_id}`,
      error: {},
      data: newLike
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createLike
}