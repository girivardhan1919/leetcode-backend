const express = require('express');

const ProblemRouter = require('./problems.routes');
const UserRouter = require('./user.routes');
const QuestionRouter = require('./question.routes');
const TopicRouter = require('./topic.routes');
const AnswerRouter = require('./answer.routes');
const CommentRouter = require('./comment.routes');
const { likeController } = require('../../controllers');

const v1Router = express.Router();

v1Router.use('/problems', ProblemRouter);
v1Router.use('/users', UserRouter);
v1Router.use('/questions', QuestionRouter);
v1Router.use('/topic', TopicRouter);
v1Router.use('/answers', AnswerRouter);
v1Router.use('/comments', CommentRouter);
v1Router.post('/:type/:id/likes', likeController.createLike);



module.exports = v1Router;
