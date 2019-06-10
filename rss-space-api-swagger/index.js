// Express 
const express = require('express')
const article = require('./app/routes/feed');
const app = express()
const port = 3000

//  Mongoosse 
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');

// Swagger 
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Route
//let book = require('./app/routes/book');


// Config
let config = require('config'); 
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    //
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req, res) => res.json({message: 'Wellcome to RSS-Space-API'}))

app.use('/api', router);
//app.use('/feed',feedRoutes);
//app.use('/api/article', feedRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// SWAGGER
const swaggerDefinition = {
  info: {
    title: 'REST API for RSS-Space', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'RSS-Space API', // short description of the app
  },
  host: 'localhost:3000', // the host or url of the app
  basePath: '/api', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

// use swagger-Ui-express for your app documentation endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app; 
