//Assignments : String Methods in JavaScript Performed on a String 

let mystr = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
console.log(mystr);

let ch1 = mystr.charAt();       //Character at first Position
let ch2 = mystr.charAt(9);     //Getting chararacter at 9th Position
console.log(`The first Character is ${ch1}`); 
console.log(`Character at 9th index is ${ch2}`); 

let ch3 = mystr.charAt( mystr.length - 2);  //Second Last Character
console.log(`The second last Character is ${ch3}`);

let substr = mystr.substring(mystr.length-11, mystr.length-1);
console.log(`The substring of last 10 Characters is ${substr}`);

let substr2 = mystr.slice(0, 9);
console.log(`The substring of first 10 characters is ${substr2}`);

let substr3 = mystr.slice(-20);
console.log(`The substring  of last 20 characters is ${substr3}`);

let firstOccurence = mystr.indexOf("s");
console.log(`The first occurence of s is ${firstOccurence}`);

let firstOccurence2 = mystr.indexOf("s", 10);
console.log(`The first Occurence of s after the 10th index is ${firstOccurence2}`);

mystr.replace("Lorem", "Hello");
console.log(`The string after replacing the lorem with hello is ${mystr}`);

mystr.toUpperCase();
console.log(mystr);

mystr.toLowerCase();
console.log(mystr);