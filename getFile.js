//This module will be used to search directory for a file and retreave its content
const fs = require('fs');


const getFile = function(folderPath){
  fs.readdir(folderPath, (err, files) =>{
    if (err){
      console.log(err);
    }
    console.log("this is done");
    console.log(files);
  })
}
console.log("i am done!")

getFile('./FileStorage');