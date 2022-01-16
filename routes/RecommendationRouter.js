const Router = require('express').Router();
const controller = require('../controllers/RecommendationController');

Router.post('/', controller.CreateRecommendation);
Router.get('/', controller.GetAllRecommendations);
Router.put('/search', controller.UpdateRecommendation);
Router.delete('/recommendation_id', controller.DeleteRecommendation);

Router.get('/search', controller.GetRecommendationsByNeighborhood);

module.exports = Router;
