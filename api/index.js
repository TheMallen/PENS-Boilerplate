"use strict";

var rest = require('epilogue');
var middleware = require('./middleware');

function generateRoutes(db) {  
  var router = require('express').Router();
  
  rest.initialize({
    app: router,
    sequelize: db.sequelize
  });

  var todoItems = rest.resource({
      model: db.models.TodoItem,
      endpoints: ['/todoItems', '/todoItems/:id'],
  });
  
  //ad resources here!
  
  return router;
}

module.exports = generateRoutes;