const Router = require('express').Router();
const controller = require('../controllers/NeighborhoodController');

Router.post('/', controller.CreateNeighborhood);
Router.get('/', controller.getAllNeighborhoods);
Router.get('/search', controller.getorcreateNeighborhoodByZipcode);
Router.put('/:neighborhood_id', controller.updateNeighborhood);
Router.delete('/:neighborhood_id', controller.deleteNeighborhood);

module.exports = Router;
