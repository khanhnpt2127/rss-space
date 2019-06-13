// import MODEL 
let FeedModel = require('../models/feed.model')
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
  
  // Save Profile to DB
	feed.save(function(err,feed) {
    if (err) {
      res.status(500).send(err);
      return console.error(err);
    }
    

    // Send Profile to Feed Services
    res.status(201).send(feed)
  });

};

// handle get Feed by ID
exports.getById = function(req, res) {
  res.send(`Get By ID ${req.params.id}`);
}




