// STEP 1

const library = [
  {
    title: "Object 1",
    author: "John Doe",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "Object 2",
    author: "Jane Doe",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "Object 3",
    author: "Kamakani",
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];

// STEP 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// STEP 3
const { title: firstBook } = library[0];
console.log(firstBook);

// STEP 4
const jsonObject = JSON.stringify(library);
console.log(jsonObject);