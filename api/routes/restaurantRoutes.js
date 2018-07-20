'use strict';

module.exports = function(app) {
  var restaurant = require('../controllers/restaurantController');
  
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

  //Routes  
  app.get('/api/restaurant', restaurant.getRestaurants)       
     .post('/api/restaurant', restaurant.createRestaurant)
	 .delete('/api/restaurant/:id', restaurant.deleteRestaurant);	
};