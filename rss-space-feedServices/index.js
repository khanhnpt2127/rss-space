// Data Model 
let FeedArticles = require('./feedArticles')

// Schedule JOB
var schedule = require('node-schedule');

// RSS Parser
let Parser = require('rss-parser');


function validateRssLink(feedLink) {

// Validate feedLink 

}


function ParseProfileBuilder(feedLink) {
  // Validate Standard RSS Profile 
  let parser = new Parser(); 
  (async () => {
  
    let feed = await parser.parseURL(feedLink);
    console.log(feed.title);
  })(); 
}



function fetchFeedData(feedLink, parserProfile) {


let parser = new Parser({
customFields: {
    feed: ['updated'],
    item: ['description','pubDate'],
  }
});

(async () => {
  
  var feedArticles = new FeedArticles();


  let feed = await parser.parseURL(feedLink);
  feedArticles.feedId = "";
  feedArticles.lastBuildDate = feed.lastBuildDate;


  feed.items.forEach(item => {
    feedArticles.articles.push(item);
  });
  
  

  console.log(feedArticles)

})();


}



// Main 



fetchFeedData("http://feeds.bbci.co.uk/news/business/rss.xml",null)
//ParseProfileBuilder("http://feeds.bbci.co.uk/news/business/rss.xml")