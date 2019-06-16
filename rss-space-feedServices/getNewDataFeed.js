let objConparision = require('./object-comparision') 

function getNewDataFeed (newFeedData, lastFeedData) {

    var newFeeds = newFeedData ;
    var lastFeeds = lastFeedData;

    var duplicatedFeed = []
    newFeeds.forEach(e1 => {
        lastFeeds.forEach(e2 => {
            if((objConparision(e1, e2))) {
                duplicatedFeed.push(e1)
            }
        }) 
    });

    var diffData = newFeeds.filter(n => !duplicatedFeed.includes(n))

    var duplicateLastData = []
//        console.log(diffData)
    diffData.forEach(e1 => {
        lastFeeds.forEach(e2 => {
            if((objConparision(e1,e2))) 
                duplicateLastData.push(e1)
        })
    })

    var newData = diffData.filter(n => !duplicateLastData.includes(n))


    return newData


}



module.exports = getNewDataFeed

