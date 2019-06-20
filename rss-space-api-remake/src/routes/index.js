var express = require('express');
const router = express.Router();

// Sub Routes
var feed = require('./feed')
var feedArticles = require('./feedArticles')
var user = require('./user')

router.get('/', (req,res) => res.send('hallo'));
router.use('/feed', feed);
router.use('/feedArticles', feedArticles);
router.use('/user', user)

module.exports = router;
