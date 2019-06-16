let writer = require('./write-file')
let objConparision = require('./object-comparision')


const finalArray = []
writer.readFileToJSON('./outputa.json', (data1) => {
    writer.readFileToJSON('./outputb.json',(data2) => {

        var newFeeds = data1.articles;
        var lastFeeds = data2.articles;

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


        console.log(newData)

    })
   
})


