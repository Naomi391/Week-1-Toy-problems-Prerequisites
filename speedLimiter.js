const prompt = require("prompt-sync")(); //Imports the prompt-sync module to Node.js

const speed = parseInt(prompt("Input the speed: ")); //Prompts the user to 'Input the speed'

//This is a function that takes the speed as a parameter
const demeritPointsCalc = (speed) => {
  const speedLimit = 70; //We need a speedLimit variable
  const kmDemerit = 5; //Calculates the speed after 5 kms

  if (speed < speedLimit) {
    //Inside the function, check if speed is less that speed limit
    console.log("Ok"); //If the speed is less than the speed limit, say 'Ok'
  } else {
    const thePoints = Math.floor((speed - speedLimit) / kmDemerit); //This calculates the value of points.

    if (thePoints > 12) {
      //Checks if the points are greater than twelve
      console.log("License suspended"); //If greater that 12, suspend the licence
    } else {
      console.log(`Points: ${thePoints}`); //If not, print out the points
    }
  }
};

demeritPointsCalc(speed); //Remember to call the funtion in order for it to run

/*
//This is used to import the prompt-sync module in Node.js
const prompt = require("prompt-sync")();
//The input is turned into an integer and stored in variable called speed
const speed = parseInt(prompt("Input the speed: "));

//Using switch statement, I try to check wheter the conditions are fulfilled,
//then console.log the results
switch (true) {
  case speed <= 70: ////case is the value to be checked
    console.log("Ok"); // show this result
    break; //Remember to break your code after the case is checked

  case speed <= 75:
    console.log("Point: 1");
    break;

  case speed <= 80:
    console.log("Point: 2");
    break;

  case speed <= 85:
    console.log("Point: 3");
    break;

  case speed <= 90:
    console.log("Point: 4");
    break;

  case speed <= 95:
    console.log("Point: 5");
    break;

  case speed <= 100:
    console.log("Point: 6");
    break;

  case speed <= 105:
    console.log("Point: 7");
    break;

  case speed <= 110:
    console.log("Point: 8");
    break;

  case speed <= 115:
    console.log("Point: 9");
    break;

  case speed <= 120:
    console.log("Point: 10");
    break;

  case speed <= 125:
    console.log("Point: 11");
    break;

  case speed <= 130:
    console.log("Point: 12");
    break;

  default:
    console.log("License suspended"); // The default gives me the default value when other cases have not satisfied the required standards
}
*/

/*
const prompt = require("prompt-sync")();

const speed = parseInt(prompt("Input the speed"));

if (speed <= 70) {
  console.log("Ok");
} else if (speed <= 75) {
  console.log("Point: 1");
} else if (speed <= 80) {
  console.log("Point: 2");
} else if (speed <= 85) {
  console.log("Point: 3");
} else if (speed <= 90) {
  console.log("Point: 4");
} else if (speed <= 95) {
  console.log("Point: 5");
} else if (speed <= 100) {
  console.log("Point: 6");
} else if (speed <= 105) {
  console.log("Point: 7");
} else if (speed <= 110) {
  console.log("Point: 8");
} else if (speed <= 115) {
  console.log("Point: 9");
} else if (speed <= 120) {
  console.log("Point: 10");
} else if (speed <= 125) {
  console.log("Point: 11");
} else if (speed <= 130) {
  console.log("Point: 12");
} else {
  console.log("Licence suspended");
}

*/
