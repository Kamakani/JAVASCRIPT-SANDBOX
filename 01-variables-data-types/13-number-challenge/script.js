let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

const sumOutput = `${x} + ${y} = ${x + y}`;
const differenceOutput = `${x} - ${y} = ${x - y}`;
const productOutput = `${x} * ${y} = ${x * y}`;
const quotientOutput = `${x} / ${y} = ${x / y}`;
const rmOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput); // x + y = sum
console.log(differenceOutput); // x - y = diff
console.log(productOutput); // x * y = product
console.log(quotientOutput); // x / y = quotient
console.log(rmOutput); // x % y = remainder
