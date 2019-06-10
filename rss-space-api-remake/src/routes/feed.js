var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Has been pinged to FEED endpoint! Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send('get All Feed Info'); 
});


router.get('/:id', (req,res) => {
  res.send('get Feed Info by ID');
})

router.post('/', (req, res) => {
  res.send('POST new FEED');
});

module.exports = router;
