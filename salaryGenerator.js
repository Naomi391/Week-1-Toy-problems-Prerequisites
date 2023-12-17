const prompt = require("prompt-sync")();

function calculateTax(income) {
  if (income <= 24000) {
    return 0.1 * income;
  } else if (income >= 24001 && income <= 32333) {
    return 0.25 * income;
  } else if (income >= 32334 && income <= 500000) {
    return 0.3 * income;
  } else if (income >= 5000001 && income <= 800000) {
    return 0.325 * income;
  } else {
    return 0.35 * income;
  }
}

function calculateNHIF(income) {
  if (income <= 5999) {
    return 150;
  } else if (income <= 7999) {
    return 300;
  } else if (income <= 11999) {
    return 400;
  } else if (income <= 14999) {
    return 500;
  } else if (income <= 19999) {
    return 600;
  } else if (income <= 24999) {
    return 750;
  } else if (income <= 29999) {
    return 850;
  } else if (income <= 34999) {
    return 900;
  } else if (income <= 39999) {
    return 950;
  } else if (income <= 44999) {
    return 1000;
  } else if (income <= 49999) {
    return 1100;
  } else if (income <= 59999) {
    return 1200;
  } else if (income <= 69999) {
    return 1300;
  } else if (income <= 79999) {
    return 1400;
  } else if (income <= 89999) {
    return 1500;
  } else if (income <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

function calculateNSSF(income) {
  return 0.06 * income;
}

function calculateHousingLevy(income) {
  return 0.015 * income;
}

function deductions(
  calculateTax,
  calculateNSSF,
  calculateNHIF,
  calculateHousingLevy
) {
  let income = parseInt(prompt("Enter your gross salary here: "));

  let tax = calculateTax(income);
  let nhif = calculateNHIF(income);
  let nssf = calculateNSSF(income);
  let housing = calculateHousingLevy(income);

  let totalDeductions = tax + nhif + nssf + housing;
  let netSalary = income - totalDeductions;

  console.log(
    `Your gross pay is ${income}\n Your total deductions are ${totalDeductions}\n Your net salary is ${netSalary}`
  );
}
deductions(calculateTax, calculateNHIF, calculateNSSF, calculateHousingLevy);
