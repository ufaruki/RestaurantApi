'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  id: {
	type: String,
	required: false
  },
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true    
  },
  address: {
    type: String,
    required: true    
  },
  createDate: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);