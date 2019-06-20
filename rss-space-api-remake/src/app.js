// Express 
const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');


app.use(cors());
//  Mongoosse 
let mongoose = require('mongoose');
let morgan = require('morgan');
let FeedScheme = require('./models/feedArticles')
let FeedProviderSchema = require('./models/feed.model')



// MQ Broker
var amqp = require('amqplib/callback_api');

// Receiver for feedData 
amqp.connect('amqp://localhost:5672', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'feedDataReceiver';

        channel.assertQueue(queue, {
            durable: false
        });

        //console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            //console.log(" [x] Received %s", msg.content.toString());
            var jsonObject = JSON.parse(msg.content.toString());
            //console.log(jsonObject)

          // Save to DB
          var feedScheme = new FeedScheme(jsonObject)
          
          
          // Update FeedName
          FeedProviderSchema.findOne({ _id: jsonObject.feedId },(err, doc) => {
            if(err) console.log(err)
            doc.feedName = jsonObject.feedName
            doc.save()
          })

          //console.log(feedScheme); 
          feedScheme.save(function(err, feed) {
            if(err) console.log(err)
            //console.log(feed)
            // TODO:
           
          })

        }, {
            noAck: true
        });
    });
});


// Receiver for updatedData
amqp.connect('amqp://localhost:5672', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'feedUpdatedDataReceiver';

        channel.assertQueue(queue, {
            durable: false
        });

        //console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            //console.log(" [x] Received %s", msg.content.toString());
            var jsonObject = JSON.parse(msg.content.toString());
            //console.log(jsonObject)


            // Update to DB
            FeedScheme.findOne({feedId: jsonObject.feedId},(err, doc) =>{
              if(err) console.log(err)
              //console.log(doc)
              jsonObject.articles.forEach(element => {
                  doc.articles.push(element)                
              });

              //console.log(doc)
              
              doc.save((err) => {
                if (err) console.log(err)
              });
              
            })




          /*
          // Save to DB
          var feedScheme = new FeedScheme(jsonObject)
           
          //console.log(feedScheme); 
          feedScheme.save(function(err, feed) {
            if(err) console.log(err)
            //console.log(feed)
            // TODO:
           
          })
          */
        }, {
            noAck: true
        });
    });
});




// Config
let config = require('config'); 
var router = express.Router();

// Parser 
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies



// Mongoose 
const uri = "mongodb://tknguyen2127:ZfVDJD3NcAHqX4F6@cluster0-shard-00-00-eutnm.mongodb.net:27017,cluster0-shard-00-01-eutnm.mongodb.net:27017,cluster0-shard-00-02-eutnm.mongodb.net:27017/rss-space?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri).then(
  () => { },
  err => { 
  // Add to LOG
  //console.log(err)  
  }
);



// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API');
    next(); // make sure we go to the next routes and don't stop here
});


// routes
app.use('/api',require('./routes'));

app.listen(port, () => console.log(`RSS-SPACE-API listening on port ${port}!`))



module.exports = app; 
