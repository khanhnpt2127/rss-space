let mongoose = require('mongoose')

const server = 'cluster0-shard-00-00-eutnm.mongodb.net:27017'
const db = 'rss-space'
const user = 'tknguyen2127'
const password = 'tknguyen2127$'

var conStr = `mongodb://${user}:${password}@${server}/${db}`

const uri = "mongodb://tknguyen2127:ZfVDJD3NcAHqX4F6@cluster0-shard-00-00-eutnm.mongodb.net:27017,cluster0-shard-00-01-eutnm.mongodb.net:27017,cluster0-shard-00-02-eutnm.mongodb.net:27017/rss-space?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";


let FeedSchema = new mongoose.Schema({
  name: String,
  link: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now}
},{ collection: "feedProviderProfiles"})



mongoose.connect(uri).then(
  () => { },
  err => { 
  // Add to LOG
  //console.log(err)  
  }
);


module.exports = mongoose.model('feed', FeedSchema)




