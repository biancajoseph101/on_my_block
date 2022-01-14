const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.post('/', controller.CreateUser);
Router.get('/', controller.getAllUsers);
Router.put('/', controller.updateUser);
Router.delete('/', controller.deleteUser);

module.exports = Router;
