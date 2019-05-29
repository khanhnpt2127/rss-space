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
    item: ['author:name','updated'],
  }
});

(async () => {
 
  let feed = await parser.parseURL('https://www.reddit.com/r/news/.rss');
  console.log(feed.title);
	console.log(feed.updated);
	console.log("\n");
  feed.items.forEach(item => {
    console.log(item.title + "\n" + item.link + "\n" + item.updated + "\n" +  item.author);
		console.log("\n");
  });
 
})();



