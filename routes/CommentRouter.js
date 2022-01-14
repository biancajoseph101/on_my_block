const Router = require('express').Router();
const controller = require('../controllers/CommentController');

Router.post('/', controller.CreateComment);
Router.get('/', controller.getAllComments);
Router.put('/', controller.updateComment);
Router.delete('/', controller.deleteComment);

module.exports = Router;
