// Schedule JOB
var schedule = require('node-schedule');

// RSS Parser
let Parser = require('rss-parser');
/*
var j = schedule.scheduleJob('*x/1 * * * *', function(){
	console.log('1minute yay' );
});
*/
let parser = new Parser({
 customFields: {
    feed: ['updated'],
    item: ['description','pubDate'],
  }
});

(async () => {
 
  let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml#');
  // console.log(feed.title);
  // console.log(feed.updated);
  // console.log("\n");
//  console.log(Object.keys(feed.items[0]));
  feed.items.forEach(item => {
    console.log(item.title + "\n" + item.link + "\n" + item.description + "\n" + item.pubDate  );
		console.log("\n");
  });
 
})();



