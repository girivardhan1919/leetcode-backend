const express = require('express');
const { userController } = require('../../controllers');
const { followController } = require('../../controllers');

const userRouter = express.Router();

userRouter.post('/', userController.addUser);
userRouter.get('/:id', userController.getUser);
userRouter.put('/:id', userController.updateUser);
userRouter.post('/:userId/follow/:targetUserId', followController.createFollow);

module.exports = userRouter;