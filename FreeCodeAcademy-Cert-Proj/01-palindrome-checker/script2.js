const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("textInput");
let returnStr = "eye";

const isPalindrome = (inputText) => {
  const text = inputText.innerHTML;
  // Clean the string: convert to lowercase and remove non-alphaneumeric characters
  let cleanStr = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the cleaned string
  let reverseStr = cleanStr.split('').reverse().join('');
  /**
   * if statement will check if inputText has any characters
   * if it does not, it will send a Please input a value alert
   * if it does, it will run the checkpalindrome function and save the result to returnStr
   */
  if (inputText === "") {
    returnStr = checkPalindrome(cleanStr, reverseStr);
  } else {
    alert("Please input a value");
  };

  return returnStr;
};

// this function will check if the string is a palindrome.
function checkPalindrome(str, revStr) {
  if (str === revStr) {
    return str;
  }
};

checkBtn.addEventListener("click", isPalindrome);