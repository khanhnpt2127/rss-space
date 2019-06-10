var express = require('express');
const router = express.Router();

var feed = require('./feed')


router.get('/', (req,res) => res.send('hallo'));
router.use('/feed', feed);

module.exports = router;
