const Router = require('express').Router();
const controller = require('../controllers/CrimeTipController');

Router.post('/', controller.CreateCrimeTip);
Router.get('/', controller.getAllCrimeTips);
Router.put('/', controller.updateCrimeTip);
Router.delete('/', controller.deleteCrimeTip);

module.exports = Router;
