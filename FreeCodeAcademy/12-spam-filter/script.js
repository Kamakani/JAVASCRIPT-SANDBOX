const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

const helpRegex = /please help|assist me/i; // Example regex to detect "please help" if it is found or "assist me" if it is not found in a message the i ignores case sensitivity
// Example regex to detect "dollar" in a message i checks for case insensitivity
// () captures the optional words "hundred", "thousand", "million", or "billion" before the word "dollars"
// [0-9]+ matches one or more digits before the optional words
// ? makes the preceding group optional, meaning it can match messages with or without these words
// \s* and \s+ allows for optional spaces between the number and the word "dollars"
// This regex will match messages like "100 dollars", "1 million dollars", or "500 thousand dollars"
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
// ?: is used to create a non-capturing group, meaning it won't create a backreference for the matched group
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i; // Example regex to detect "free money" in a message
// ^ matches the start of the string, ensuring that "stock alert" is detected only if it appears at the beginning of the message
// $ matches the end of the string, ensuring that "stock alert" is detected only if it appears at the end of the message
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i; // Example regex to detect "stock alert" in a message
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i; // Example regex to detect "dear friend" in a message

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex]; // Array of regex patterns to check against messages

// const isSpam = (msg) => false;; will implicitly return false for all messages
// checks denyList for any regex that matches the message
// if any regex matches, it returns true, indicating the message is spam
const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener('click', () => {
    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        return;       
    }

    result.textContent = isSpam(messageInput.value) ? 'Oh no! This looks like a spam message.' : 'This message does not seem to contain any spam.';
    messageInput.value = ''; // Clear the input field after checking
});