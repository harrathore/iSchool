var fs = require("fs");                              //Importing the modules

fs.readFile("myfile.txt","utf-8",function(err, data){     //After reading file callback function will we called
    if(err){ console.log("Error ", err)}
    else{ console.log(data)};
});

setTimeout(function(){
    fs.appendFileSync("myfile.txt", "This is appended text after every 2 seconds","utf-8");
},2000);
