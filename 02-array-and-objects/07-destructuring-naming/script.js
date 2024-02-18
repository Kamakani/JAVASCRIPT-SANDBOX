const firstName = 'Derek';
const lastName = 'White';
const age = 43;

const person = {
  firstName,
  lastName,
  age
};

console.log(person);

// Destructuring

const todo = {
  id: 1,
  title: 'take out trash',
  user: {
    name: 'John'
  }
}

const {
  id: todoId, // this is renaming
  title, 
  user: {name} // this is destructuring
} = todo;

console.log(todoId);

// Destructure Arrays
const numbers = [23, 67, 33, 49, 53];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);