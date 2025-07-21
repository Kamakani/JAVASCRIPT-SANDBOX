// const id is setting the name of the variable
// for the element in HTML, it is being displayed as #budget
// however it is displayed without the hash tag here, just use single quotes
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

// the g at the end of the regex expression stands for global.
// this means that it will continue to search for the characters +, - and space.
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// the i flag at the end of the regex expression stands for insensitive as in case sensitivity
// [0-9] states that any number before or after the e will be replaced
// and the + sign allows you to match a pattern that occurs one or more times.
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex)
;}

/*
// targetId will concatenate a hash tag before the entryDropdown.value from HTML
// targetInputContainer will take the targetId and concatenate a space before .input-container
// before entering it into document.querySelector. an HTMLString variable is created that will
display HTML text and inputs. And insertInputContainer will gain HTML before the end.
*/
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

/*
The below function will calculate the calories by taking the calories inputted into the getCaloriesFromInputs function
and then will output an innerHTML that will add HTML span, hr and p with text.
*/
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type="number"]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type="number"]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type="number"]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type="number"]');

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if(isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = (budgetCalories - consumedCalories) + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

  output.innerHTML = `
  <span class='${surplusOrDeficit.toLowerCase()}'>${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}

/**
 * This function will take the inputted calories and will return the total as long as
 * a valid input is used to gain calorie numbers.
 */
function getCaloriesFromInputs(list) {
  let calories = 0;
  for(const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if(invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

/**
 * This function will clear the entire form, by removing all calories and removing any added innerHTML and innerText.
 */
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));

  for(const container of inputContainers) {
    container.innerHTML = "";
  }

  budgetNumberInput.value = "";
  output.innerText = "";

  output.classList.add("hide");
}

/**
 * These eventListeners will set the first value to click or submit and will run a function as the second.
 */
addEntryButton.addEventListener("click", addEntry);

calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);