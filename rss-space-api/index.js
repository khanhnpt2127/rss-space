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

app.get('/', (req, res) => res.json({message: 'Wellcome to RSS-Space-API'}))

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



module.exports = app; 
