let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['music', 'sports']
};

x = person.name;
// x = person['age'];
x = person.address.state;
x = person.hobbies[0];

// change data within an object.
person.name = 'Jane Doe';
person['isAdmin'] = false;

// delete data from an object.
delete person.age;

// Add data to an object
person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
}

person.greet();

const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy'
}

x = person2['first name'];

console.log(x);