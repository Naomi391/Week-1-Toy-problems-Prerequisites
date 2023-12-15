//This is used to import the prompt-sync module in Node.js
const prompt = require("prompt-sync")();
//The prompt shows my phrase in my terminal, I have stored my result in a variable
//called parse, which I have turned into an integer using parseInt command
const phrase = parseInt(prompt("What is your mark? "));

//These are conditions to be checked n order to show the grades
if (phrase >= 80 && phrase <= 100) {
  console.log("A");
} else if (phrase >= 60 && phrase <= 79) {
  console.log("B-");
} else if (phrase >= 50 && phrase <= 59) {
  console.log("C-");
} else if (phrase >= 40 && phrase <= 49) {
  console.log("D-");
} else {
  console.log("E");
}
