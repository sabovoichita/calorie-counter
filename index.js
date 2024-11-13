const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  //   console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `<label>Entry ${entryNumber} Name</label>`;
}

console.log(calorieCounter);
console.log(budgetNumberInput);
console.log(entryDropdown);
console.log(addEntryButton);
console.log(clearButton);
console.log(output);
// console.log(cleanInputString("+-99"));
// console.log(isInvalidInput("10"));
// console.log(entryDropdown.value);
