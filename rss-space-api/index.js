// Express 
const express = require('express')
const app = express()
const port = 3000

//  Mongoosse 
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');

// Route
//let book = require('./app/routes/book');

// Config
let config = require('config'); 
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req, res) => res.json({message: 'Wellcome to RSS-Space-API'}))

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



module.exports = app; 
