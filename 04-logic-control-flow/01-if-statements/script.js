if (true) {
  console.log('This is true');
}
if (false) {
  console.log('This is not true');
}

const x = 10;
const y = 5;

if ((x + 1) >= y) { console.log(`${x} is greater than or equal to ${y}`); }

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

if(x !== y) {
  // var z = 20; does allow access outside of the block
  const z = 20; // does not allow access outside of the block
  // let z = 20; does not allow access outside of the block
  console.log(`${z} is 20`);
}

// console.log(z);

// Shorthand If
if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
  console.log(`This is true`);
else console.log(`This is False`)