// DATA TYPES

// String - Sequences of characters, Must be in quotes or backticks
// Number - Integers as well as floating-point numbers
// Boolean - Logical entity / true or false
// Null - Intentional absence of any object value
// Undefined - A Variable that has not yet been defiuned / assigned
// Symbol, - Built-in object whose constructor returns a unique symbol
// BigInt - Numbers that are greater than the "Number" type can handle

// REFERENCE TYPES (Objects)

// Reference types or "objects are a non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types

// STATIC TYPING VS DYNAMIC TYPING

// JavaScriupt is a dynamically-types language. This means, we do not explicitly define the types for our vartiables. Many other languages are statically-typed such as C, C++ and Java

// TypeScript is a superset of JavaScript, which allows static -typing. This can make your code more verbose and less prone to errors. TypeScript may be something you want to look into later on.

// String
const firstName = 'Sara';
// number
const age = 30;
const temp = 98.9;

// boolean
const hasKids = true;

// null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id')

// BigInt
const n = 9007199254740991n;

// Reference Types
const numbers = [1,2,3,4]

const person = {
  name: 'Gabe'
};

function sayHello(){
  console.log('Hello');
}

const output = sayHello;

// typeof lists the data type of the listed variable.
console.log(output, typeof output);

// ECMAScript Language Specification
// https://262.ecma-international.org/5.1/#sec-11.4.3