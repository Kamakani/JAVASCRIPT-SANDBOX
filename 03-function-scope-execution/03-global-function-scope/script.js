// window.alert('Hello');
// alert('Hello 2');

const x = 100;

console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

if(true) {
  console.log(x, 'in block');
}
// variable shadowing - x in the function will override global x variable
function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();