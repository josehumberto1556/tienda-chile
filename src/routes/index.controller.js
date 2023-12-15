const express = require('express'); 

const personsRouter = require('./usuario.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', personsRouter);
}

module.exports = routerApi;
