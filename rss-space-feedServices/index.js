// Data Model 
let FeedArticles = require('./feedArticles')

// Schedule JOB
var schedule = require('node-schedule');

// RSS Parser
let Parser = require('rss-parser');


// MQ Lib
var amqp = require('amqplib/callback_api');

function validateRssLink(feedLink) {

// Validate feedLink 

}



// CRON Service
function setCron(timer, feedLink, id) {
    
    var j = schedule.scheduleJob('*/1 * * * *', function(){
        fetchNewFeedData(feedLink,id)
    
    });
}

function ParseProfileBuilder(feedLink) {
  // Validate Standard RSS Profile 
  let parser = new Parser(); 
  (async () => {
  
    let feed = await parser.parseURL(feedLink);
    console.log(feed.title);
  })(); 
}

// refresh Feed Data 

function fetchNewFeedData(feedLink, feed_id) {

    let parser = new Parser({
        customFields: {
            feed: ['updated'],
            item: ['description','pubDate'],
          }
    });

    var feedArticles = new FeedArticles();
    
    (async () => {
        
        let feed = await parser.parseURL(feedLink);
        feedArticles.feedId = feed_id;
        feedArticles.lastBuildDate = feed.lastBuildDate;
    
    
        feed.items.forEach(item => {
        feedArticles.articles.push(item);
        });
    
        //sendBroker(feedArticles)
    
        console.log(feed);
    
        // Compare the last version 

        // Send to Broker to Update
    })();

}




// fetch New Feed Data 

function fetchFeedData(feedLink,feed_id,parserProfile) {


let parser = new Parser({
customFields: {
    feed: ['updated'],
    item: ['description','pubDate'],
  }
});
var feedArticles = new FeedArticles();
(async () => {
  
  let feed = await parser.parseURL(feedLink);
  feedArticles.feedId = feed_id;
  feedArticles.lastBuildDate = feed.lastBuildDate;


  feed.items.forEach(item => {
    feedArticles.articles.push(item);
  });

  sendBroker(feedArticles)

  // Set CRON Services
  setCron("",feedLink,feed_id)


})();
  

}



// Main 


//fetchFeedData("http://feeds.bbci.co.uk/news/business/rss.xml",null)
//ParseProfileBuilder("http://feeds.bbci.co.uk/news/business/rss.xml")


// Listen Request
amqp.connect('amqp://localhost:5672', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'feedProviderReceiver';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
            var jsonObject = JSON.parse(msg.content.toString());

            // Parse
            fetchFeedData(jsonObject.link, jsonObject._id)
            

        }, {
            noAck: true
        });
    });
});





// Send Request 
function sendBroker(feeddata) {
  amqp.connect('amqp://localhost:5672', function(error0, connection) {
      if (error0) {
          throw error0;
      }
      connection.createChannel(function(error1, channel) {
          if (error1) {
              throw error1;
          }

          var queue = 'feedDataReceiver';
          
          
          const data = JSON.stringify(feeddata);
          var msg = data;

          channel.assertQueue(queue, {
              durable: false
          });
          channel.sendToQueue(queue, Buffer.from(msg));

          console.log(" [x] Sent %s", msg);
      });
      setTimeout(function() {
          connection.close();
          //process.exit(0);
      }, 500);
  });

}






