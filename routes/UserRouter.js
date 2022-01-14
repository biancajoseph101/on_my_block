const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.post('/', controller.CreateUser);
Router.get('/', controller.getAllUsers);
Router.put('/:user_id', controller.updateUser);
Router.delete('/:user_id', controller.deleteUser);

module.exports = Router;
