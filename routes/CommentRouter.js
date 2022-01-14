const Router = require('express').Router();
const controller = require('../controllers/CommentController');

Router.post('/', controller.CreateComment);
Router.get('/', controller.getAllComments);
Router.put('/:comment_id', controller.updateComment);
Router.delete('/:comment_id', controller.deleteComment);

module.exports = Router;
