// mongoose 
let mongoose = require('mongoose')

// Import Model
let FeedProvide = require('../models/feed.model')

// Check URL is valid
function URLValidator(urlString) {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    
    if (urlString.match(regex)) {
        return true;
    } 
     
    return false;

}


// Check FeedProvider is existed
function FeedProviderValidator(feedLink,cb) {
    FeedProvide.find({link: feedLink}, function(err,feed) {
        if(err) console.log(err)
        if(feed.length == 0) {
            cb(true,null) 
        } else {
            cb(false, null);
        }
    })
} 


module.exports = { URLValidator: URLValidator, FeedProviderValidator: FeedProviderValidator }


