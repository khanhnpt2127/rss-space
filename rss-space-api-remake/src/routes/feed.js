var express = require('express')
var router = express.Router()

// Controller 
var feedController = require('../controllers/feedController');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // LOG 
  //console.log('Has been pinged to FEED endpoint! Time: ', Date.now())
  next()
})

router.route('/')
      .get(feedController.getAll)
      .post(feedController.postNew)

router.route('/getByUser')
      .post(feedController.getByUser)

router.route('/:id')
      .get(feedController.getById)

module.exports = router;
