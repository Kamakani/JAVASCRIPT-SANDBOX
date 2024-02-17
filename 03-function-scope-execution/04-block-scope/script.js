const x = 100;
const foo = 1;
var bar = 2;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y);  y is not defined outside of function

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i);
// var inside a block (not a function) can be accessed outside the block
if(true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);
// Var in a function can not be accessed outside the function
function run() {
  var d = 100;
  console.log(d);
}

run();