// import MODEL 
let FeedModel = require('../models/feed.model')


// import Validator
let validator = require('../utils/validator')


// import MQ Send 
let sendBroker = require('../utils/sendBroker')


// handle get Feed action
exports.getAll = function(req,res) {

		FeedModel.find({},function(err,f){
			if(err) {
				//LOG
				console.log(err);
				res.status(500).send(err)
			}
			res.status(200).send(f)
		})	

}

// handle post NEW Feed
exports.postNew = function(req,res) {
  var feed = new FeedModel(req.body)	
  
  //Validate the Correct Format 
  var validatorResult = validator.URLValidator(feed.link)

  if(validatorResult) {


    validator.FeedProviderValidator(req.body.link, (result, data) => {
      if (result) {
       
            // Save Profile to DB
            feed.save(function(err,feed) {
              if (err) {
                res.status(500).send(err);
                return console.error(err);
              }
              
              // Send Profile to Feed Services
              sendBroker(feed)              

              res.status(201).send(feed)
              }); 
      } else {
        // return Data
        res.status(412).send({ "msg": "duplicated" })
      }
    })


  } else {
    res.status(412).send({ "msg": "Invalid URL" })
  }


  /*

  */

  //res.status(200).send(validatorResult)
};

// handle get Feed by ID
exports.getById = function (req, res) {
  res.send(`Get By ID ${req.params.id}`);
}




