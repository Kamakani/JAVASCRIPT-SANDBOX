/**
 * Create variables to take data from HTML using the ID's
 */
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
/**
 * this variable stores information grabbed from localstorage using JSON.parse to convert from string to a data structure
 */
const taskData = JSON.parse(localStorage.getItem("data")) || [];
/**
 * create a variable using let that stores objects
 */
let currentTask = {};
/**
 * create removeSpecialChars arrow function which replaces single quotes, double quotes, and underscores before returning 
 */
const removeSpecialChars = (string) => {
  const removeSpecialChars = string.replace(/['"_]/g,'');
  return removeSpecialChars;
};
/**
 * created addOrUpdateTask arrow function which will check if titleinput.value has been trimmed of whitespace.
 * whithin addOrUpdateTask, create dataArrIndex function which will find the index of taskData using item to see
 * if item.id is equal to currentTask.id. Creates a taskObj function which is an object using id, title, date and description.
 * for id, used removeSpecialChars function with titleInput.Value as the parameter then converting to lowercase, split and join
 * before adding - Date.now() which will display the current date and time.
 */
const addOrUpdateTask = () => {
  if (!titleInput.value.trim()) {
    alert("Please provide a title");
    return
  }
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: removeSpecialChars(titleInput.value),
    date: dateInput.value,
    description: removeSpecialChars(descriptionInput.value),
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer()
  reset()
};
/**
 * the updateTaskContainer arrow function will reset tasksContainer's innerHTML to an empty string.
 * a taskData.forEach function is created using id, title, date and description as parameters for the
 * arrow function. inside the foreach is an arrow function that adds a string onto tasksContainer.innerHTML.
 * The string is a template literal which replaces id, title, date and description using ${expression} syntax.
 */
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `
    }
  );
};
/**
 * created the deleteTask arrow function using buttonEl as a parameter. inside the function we create dataArrIndex variable
 * and assign it taskData.findIndex using item as a parameter for the arrow function to check if item.id is equal to
 * buttonEl.parentElement.id. After that the parentElement is removed, then taskData.splice() is used with dataArrIndex, 1 as the parameters. then localStorage.setItem is used to add a stringified taskdata using data as the key. 
 */
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
}
/**
 * Created editTask arrow function with buttonEl as the parameter. then created dataArrIndex variable and assigned it taskData.findIndex using item as the parameter for this arrowfunction which will determine if item.id is equal to buttonEl.parentElement.id
 * then assigned taskData[dataArrIndex] to currentTask, currentTask.title to titleInput.value, currentTask.date to dateInput.value,
 * currentTask.description to descriptionInput.value and "Update Task" to addOrUpdateTaskBtn.innerText. and lastly we ran taskForm.classList.toggle to add hidden.
 */
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");  
}
/**
 * created a reset arrow function to reset variables. addOrUpdateTaskBtn.innerText was reset to Add Task. titleInput.value, dateInput.value and descriptionInput.value were all reset to an empty string. taskForm.classList.toggle was set to hidden, and currentTask was reset to an empty object.
 */
const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
}
/**
 * an if statement using taskData.length for the parameter was created to run the updateTaskContainer function.
 */
if(taskData.length) {
  updateTaskContainer();
}
/**
 * created an addEventListener on openTaskFormBtn using click with an arrow function that toggled taskForm.classList to hidden.
 */
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);
/**
 * created an addEventListener on closeTaskFormBtn using click with an arrow function. The arrow function checked if titleInput, dateInput or descriptionInput have values saved as formInputsContainValues variable. another variable called formInputValuesUpdated checks if the values are equal to currentTask.title or currentTask.date or currentTask.description. an if statement chcking if formInputsContainValues and forminputValuesUpdated will run confirmCloseDialog.showModal() (displays html dialog element as a modal dialog) or else reset().
 */
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});
/**
 * Create another addEventListener for cancelBtn used on click with an arrow function to run confirmCloseDialog.close().
 */
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
/**
 * Create anotehr addEventListener for discardBtn used on click with an arrow function to run confirmCloseDialog.close() and reset().
 */
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset()
});
/**
 * Create another addEventListener for taskForm used on submit with an arrow function using e as a parameter. inside the arrow function preventDefault function us run on e as well as addOrUpdateTask function.
 */
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});