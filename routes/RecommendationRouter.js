const Router = require('express').Router();
const controller = require('../controllers/RecommendationController');

Router.post('/', controller.CreateRecommendation);
Router.get('/', controller.GetAllRecommendations);
Router.put('/:recommendation_id', controller.UpdateRecommendation);
Router.delete('/recommendation_id', controller.DeleteRecommendation);

module.exports = Router;
