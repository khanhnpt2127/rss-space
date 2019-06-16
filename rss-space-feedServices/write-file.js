const fs = require('fs');


function writeJSONtoFile(path,jsonString) {
    
    
    fs.writeFile(path, jsonString, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });

}



function readFileToJSON(path, cb) {
    fs.readFile(path, (err, data) => {  
        if (err) throw err;
        cb(JSON.parse(data),null);
    });
    
}

function deleteFile(path) {
    fs.unlink(path, (err) => {
        if (err) console.log(err);
    })

}


module.exports = {writeJSONtoFile: writeJSONtoFile, readFileToJSON: readFileToJSON, deleteFile: deleteFile }





