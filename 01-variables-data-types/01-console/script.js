// console.log will log whatever is listed as a value
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);
// console.error will list an error to the console.
console.error('Alert');
// conosle.warning will list a warning to the console.
console.warn('Warning');
// console.table will create a table using the values left of the colons as "index" and the values right as "Values"
console.table({name: 'Brad', email: 'brad@gmail.com'});
// console.group will group together everything between console.group and console.groupEnd
console.group('simple')
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();
// below is how to add css styles to the script file
const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);