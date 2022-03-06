
//Assignment : Methods on Array in JavaScript 

let myArr1 = [11, 12, 14, 13, 18, 17, 19, 20];

myArr1.sort();                    //Sort the array in Increasing Order
console.log(myArr1);

let myArr2 = [28, 22];
let myArr3 = myArr1.concat(myArr2);    //Concating the two  array
displayArr(myArr3);       //Function for Displaying Elements of Array
console.log(myArr3);


myArr1.push(30);
console.log(myArr1);       //Adding Element at the back of array

myArr1.pop();
console.log(myArr1);       //Removing Element from the back of array


let myArr4 = myArr1.join("|");    // Adding | between every element in the array
console.log(myArr4);


myArr1.unshift(0);        //Inserting Element at the front of array
console.log(myArr1);

let firstElement= myArr1.shift();   //Taking the front element  out of array
console.log(firstElement);
console.log(myArr1);

let myArr5 = myArr1.slice(1,3);
console.log(myArr5);           //Taking the elements from the a particular index to a perticular index

myArr1.splice(0,0,0);


myArr1.reverse();
console.log(myArr1);

let myStr = myArr1.toString();
console.log(myStr);

function displayArr(myArr){
    for(let x in myArr){
        console.log(x);
    }
}

