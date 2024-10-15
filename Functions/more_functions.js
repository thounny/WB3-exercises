// FIRST
function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${state}, ${zip}`);
}

displayMailingLabel("Thounny", "123 abc street", "Atlanta", "GA", "12345");
displayMailingLabel("Gilla", "420 Grove Street", "Los Santos", "CA", "678910");

// SECOND
function addNumbers(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

addNumbers(50, 50);
addNumbers(200, 200);

// THIRD
function displayReceipt(totalDue, amountPaid) {
  console.log(`Total Due: ${totalDue}`);
  console.log(`Amount Paid: ${amountPaid}`);
  if (amountPaid < totalDue) {
    console.log(
      `Amount still needed to be paid = ${Math.abs(amountPaid - totalDue)}`
    );
  } else {
    console.log(`Change Due: ${amountPaid - totalDue}`);
  }
}
displayReceipt(100, 300);
displayReceipt(100, 100);
displayReceipt(300, 100);
