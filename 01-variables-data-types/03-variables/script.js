// Ways to declare a variable
// var, let, const

let firstName = 'Derek';
let lastName = 'White';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;
// const characters can not be re-assigned
// x = 200;

const arr = [1,2,3,4];
// unable to reassign the variable
// arr = [1,2,3,4,5]
arr.push(5);

console.log(arr);

const person = {
  name: 'Brad'
};

person.name = 'Gabe';
person.email = 'gabewhite@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
// going to get undefined for the a variable
console.log(a);
