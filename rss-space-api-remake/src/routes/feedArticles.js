var express = require('express')
var router = express.Router()


// Controller 
var feedArticlesController = require('../controllers/feedAticlesController');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    // LOG 
    //console.log('Has been pinged to FEED endpoint! Time: ', Date.now())
    next()
})


router.route('/')
    .get(feedArticlesController.getAll)



module.exports = router
