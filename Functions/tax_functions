/* accepts gross pay and returns the Social Security tax on that amount
Assume a tax rate of 6.2% */
function getSocSecTax(grossPay) {
  return grossPay * 0.062;
}

/* accepts gross pay and returns the Medicare tax on that amount 
Assume a tax rate of 1.45% */
function getMedicareTax(grossPay) {
  return grossPay * 0.0145;
}

/* accepts a gross pay AND withholding code and returns the federal tax
withholding on that amount using only if...else if statements. */
function getFederalTax(grossPay, withholdingCode) {
  let rate;

  if (withholdingCode === 0) {
    rate = 0.23;
  } else if (withholdingCode === 1) {
    rate = 0.21;
  } else if (withholdingCode === 2) {
    rate = 0.195;
  } else if (withholdingCode === 3) {
    rate = 0.185;
  } else if (withholdingCode >= 4) {
    // calculate rate for codes 4 and above: 18% - 0.5% for each number above 4
    rate = 0.18 - (withholdingCode - 4) * 0.005;
    rate = Math.max(rate, 0); // ensures the rate doesn't go below 0
  } else {
    throw new Error("Invalid withholding code");
  }

  return grossPay * rate;
}

// people
let person1 = { grossPay: 750, withholdingCode: 0 };
let person2 = { grossPay: 1550, withholdingCode: 2 };
let person3 = { grossPay: 1100, withholdingCode: 6 };

// function to display output
function displayPersonInfo(person, personNumber) {
  console.log(
    `Person ${personNumber}: gross pay: $${person.grossPay}, withholding code: ${person.withholdingCode}`
  );
}

// display results for each person
displayPersonInfo(person1, 1);
displayPersonInfo(person2, 2);
displayPersonInfo(person3, 3);
