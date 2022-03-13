let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("myEvent",function(){
    console.log("myEvent occurred");
});
var x = 1;
var myinterval = setInterval(function(){
    myevent.emit("myEvent");
},5000);                                       // event will ocuurr after every 5 seconds

setTimeout(function(){
    clearInterval(myinterval);
    console.log("event ended");
},12000);
