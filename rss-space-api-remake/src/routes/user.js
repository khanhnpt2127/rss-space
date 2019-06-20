var express = require('express')
var router = express.Router()

// Controller 
var userController = require('../controllers/userController');



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    // LOG 
//    console.log('Has been pinged to FEED endpoint! Time: ', Date.now())
    next()
  })

  

router.route('/')
  .get(userController.getAll)
  .post(userController.create)

router.route('/authenticate')
  .post(userController.authenticate)
/*
router.route('/:id')
  .get(userController.getById)
*/
module.exports = router;
