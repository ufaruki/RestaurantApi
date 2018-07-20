var express = require('express'),
  app = express(),   
  port = process.env.PORT || 3100,
  mongoose = require('mongoose'),
  Todo = require('./api/models/restaurantModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Restaurantdb', { 'useMongoClient': true });

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 
var routes = require('./api/routes/restaurantRoutes');
routes(app);

app.listen(port);

console.log('restaurant RESTful API server started on: ' + port);