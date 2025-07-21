const output = document.getElementById("output");
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const integerToRoman = (num) => {
  const romanNumerals = [
    {value: 1000, symbol: 'M'},
    {value: 900, symbol: 'CM'},
    {value: 500, symbol: 'D'},
    {value: 400, symbol: 'CD'},
    {value: 100, symbol: 'C'},
    {value: 90, symbol: 'XC'},
    {value: 50, symbol: 'L'},
    {value: 40, symbol: 'XL'},
    {value: 10, symbol: 'X'},
    {value: 9, symbol: 'IX'},
    {value: 5, symbol: 'V'},
    {value: 4, symbol: 'IV'},
    {value: 1, symbol: 'I'}
  ];

  let result = '';

  for(let i = 0; i < romanNumerals.length; i++){
    while(num >= romanNumerals[i].value){
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  output.innerHTML = result;;
  numberInput.value = ""; // Clear input field after conversion
  return result;
};

const numberChecker = (a) => {
  if (isNaN(parseInt(a))) {
    numberInput.value = "";
    output.innerHTML = "Please enter a valid number";
  } else if(a < 0) {
    numberInput.value = "";
    output.innerHTML = "Please enter a number greater than or equal to 1"; // Clear output if input is invalid
  } else if(a >= 4000) {
    numberInput.value = "";
    output.innerHTML = "Please enter a number less than or equal to 3999"; // Clear output if input is invalid
  } else {
    integerToRoman(a);
  }
};

convertBtn.addEventListener("click", () => {
  const number = parseInt(numberInput.value);
  console.log(numberInput.value);
  numberChecker(number);
});