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

const prompt = require("prompt-sync")();

const speed = parseInt(prompt("Input the speed: "));

switch (true) {
  case speed <= 70:
    console.log("Ok");
    break;

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
    console.log("License suspended");
}
