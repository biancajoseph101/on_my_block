const Router = require('express').Router();
const controller = require('../controllers/RecommendationController');

Router.post('/', controller.CreateRecommendation);
Router.get('/', controller.GetAllRecommendations);
Router.put('/:recommendation_id', controller.UpdateRecommendation);
Router.delete('/:recommendation_id', controller.DeleteRecommendation);
Router.get('/:recommendation_id', controller.getRecommendationById);

Router.get('/search', controller.GetRecommendationsByNeighborhood);

module.exports = Router;
