// const character consists of the character the pyramid is made of
const character = "#";
// count is the number of rows that makes up the pyramid
const count = 8;
// rows is the array that makes up the rows
const rows = [];
let inverted = true;

// padRow is the function that forms the rows for the pyramid
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// this for loop runs padRow to form the pyramid and stops when i is the same as count
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

// for loop to take the number of rows and break to a new line
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);