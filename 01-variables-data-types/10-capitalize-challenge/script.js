// const myString = 'developer'

// let myNewString;
// myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
// console.log(myNewString);

const myString = 'developer';

let MyNewString;
// Solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString); 