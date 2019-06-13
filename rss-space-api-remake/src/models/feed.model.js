let mongoose = require('mongoose');
//var conStr = `mongodb://${user}:${password}@${server}/${db}`




let FeedSchema = new mongoose.Schema({
  name: String,
  link: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now}
},{ collection: "feedProviderProfiles"})







module.exports = mongoose.model('feed', FeedSchema)




