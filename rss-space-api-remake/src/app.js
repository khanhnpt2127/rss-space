// Express 
const express = require('express')
const app = express()
const port = 3000

//  Mongoosse 
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');

// Config
let config = require('config'); 
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API');
    next(); // make sure we go to the next routes and don't stop here
});


// routes
app.use('/api',require('./routes'));

app.listen(port, () => console.log(`RSS-SPACE-API listening on port ${port}!`))



module.exports = app; 
