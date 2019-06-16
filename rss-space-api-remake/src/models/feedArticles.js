var mongoose = require('mongoose');



/*
let FeedArticle = mongoose.Schema({
    title: String,
    description: String,
    link: String,
    pubDate: String,
    imageLink: String,
})
*/


let FeedArticles = new mongoose.Schema({
    feedId: {type: String, required: true, unique: true},
    lastBuildDate: String,
    articles: {type: Array, default: []}
}, {collection: "feedArticles", usePushEach: true})

module.exports = mongoose.model('feedArticles', FeedArticles)