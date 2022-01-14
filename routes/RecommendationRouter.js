const Router = require('express').Router();
const controller = require('../controllers/RecommendationController');

Router.post('/', controller.CreateRecommendations);
Router.get('/', controller.GetAllRecommendations);
Router.put('/', controller.UpdateRecommendations);
Router.delete('/', controller.DeleteRecommendations);

module.exports = Router;
