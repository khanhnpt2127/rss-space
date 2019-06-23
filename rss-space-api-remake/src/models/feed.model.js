let mongoose = require('mongoose');
//var conStr = `mongodb://${user}:${password}@${server}/${db}`




let FeedSchema = new mongoose.Schema({
  name: String,
  feedName: {type: String, default:'' }, 
  link: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now},
  isSub: { type: Boolean, default: false}
},{ collection: "feedProviderProfiles"})







module.exports = mongoose.model('feed', FeedSchema)




