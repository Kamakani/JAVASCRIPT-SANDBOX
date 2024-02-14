// CHALLENGE 1
const arr = [1 ,2, 3, 4, 5];

arr.push(6);
arr.reverse().push(0);

console.log(arr);
// Expected result: [6, 5, 4, 3, 2, 1, 0]


// CHALLENGE 2
let x;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();
x = [...arr1, ...arr2]

console.log(x);