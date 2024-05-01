const { StatusCodes } = require('http-status-codes');
const { UserService } = require('../services');
const { UserRepository } = require('../repositories');
const { NotFound } = require('../errors/notfound.error');


const userService = new UserService(new UserRepository);


async function addUser(req, res, next) {
  try {
    console.log('inside user contoller');
    const newUser = await userService.createUser(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created a new user',
      error: {},
      data: newUser
    })
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await userService.getUser(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully fetched the user',
      error: {},
      data: user
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully updated the user',
      error: {},
      data: updatedUser
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {
  addUser,
  getUser,
  updateUser
};