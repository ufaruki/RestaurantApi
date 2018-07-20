'use strict';

var 
	mongoose = require('mongoose'),
	Restaurant = mongoose.model('Restaurant');

exports.getRestaurants = function(req, res) {
  Restaurant.find({ }, function(err, restaurant) {
    if (err)
      res.status(400).send(err);
	  
    res.status(200).json(restaurant);
  });
};

exports.createRestaurant = function(req, res) {
  var newRestaurant = new Restaurant(req.body);  
  newRestaurant.save(function(err, restaurant) {
    if (err) 
		res.status(400).send(err);  
	  	  
    res.status(200).json(restaurant);	
  });
};

exports.deleteRestaurant = function(req, res) {
	var restaurantId = req.params.id.toString() + "";	
	Restaurant.findByIdAndRemove({ _id: restaurantId }, (err, restaurant) => {
		if (err)		
			res.status(400).send(err);		
			
		res.status(200).send(restaurant);					
	});	
};