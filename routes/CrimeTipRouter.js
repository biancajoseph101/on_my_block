const Router = require('express').Router();
const controller = require('../controllers/CrimeTipController');
Router.post('/', controller.CreateCrimeTip);
Router.get('/', controller.getAllCrimeTips);
Router.get('/:crime_id', controller.getCrimeTipById);
Router.put('/:crime_id', controller.updateCrimeTip);
Router.delete('/:crime_id', controller.deleteCrimeTip);
module.exports = Router;
