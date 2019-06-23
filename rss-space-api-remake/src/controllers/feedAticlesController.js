// Import MODEL 
let FeedArticles = require('../models/feedArticles')

// import User
let User = require('../models/user')

exports.getAll = function(req,res) {

    FeedArticles.find({}, function(err, articles){
        res.status(200).send(articles);
    })

}


exports.getFeedByUser = function(req, res) {
    User.findOne({ _id: req.body.userId }, (err, user) => {
        if(err) console.log(err)
        
        if(user.subscribed.length > 0) {
            FeedArticles.find({ feedId: user.subscribed}, (err, articles) => {
                if(err) console.log(err)
                res.status(200).send(articles); 
            }) 
        } else {
            res.status(200).send({"msg" : "empty"}) 
        }
    })

}


