var express = require('express');
const router = express.Router();

// Sub Routes
var feed = require('./feed')
var feedArticles = require('./feedArticles')

router.get('/', (req,res) => res.send('hallo'));
router.use('/feed', feed);
router.use('/feedArticles', feedArticles);

module.exports = router;
