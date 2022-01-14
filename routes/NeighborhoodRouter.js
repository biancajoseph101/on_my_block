const Router = require('express').Router();
const controller = require('../controllers/NeighborhoodController');

Router.post('/', controller.CreateNeighborhood);
Router.get('/', controller.getAllNeighborhoods);
Router.put('/', controller.updateNeighborhood);
Router.delete('/', controller.deleteNeighborhood);

module.exports = Router;
