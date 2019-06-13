// Import MODEL 
let FeedArticles = require('../models/feedArticles')



exports.getAll = function(req,res) {

    FeedArticles.find({}, function(err, articles){
        res.status(200).send(articles);
    })

}


