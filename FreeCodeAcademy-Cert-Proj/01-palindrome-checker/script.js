const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isNotEmpty = str => {
  if(str === ""){
    return alert("Please input a value.");
  } else {
    return isPalindrome(str);
  }
}

const isPalindrome = str => {
 const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
 const reverseStr = cleanStr.split('').reverse().join('');
 inputText.innerHTML = ""

 if(cleanStr === reverseStr){
  result.innerHTML = `${str} is a palindrome`
  return `${str} is a palindrome`;
 } else {
  result.innerHTML = `${str} is not a palindrome`
  return `${str} is not a palindrome`;
 }
}

const checkPalindrome = () => {
  isNotEmpty(inputText.value);
  inputText.value = "";
}

checkBtn.addEventListener("click", checkPalindrome);

//console.log(isNotEmpty("eye"));
//console.log(isNotEmpty("Hello"));
//console.log(isNotEmpty("racecar"));
//console.log(isNotEmpty("_eye"));
//console.log(isNotEmpty("race car"));