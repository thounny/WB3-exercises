// Declare a variable 'text' and assign it a string value
text = "Now is the time for all good people...";

// Use the indexOf() method to find the index of the first space character in 'text'
// The result is stored in the 'index' variable
index = text.indexOf(" ");

// Print the value of 'index' to the console
console.log(index);

// Print the length of the 'text' string to the console
console.log(text.length);

// Use the indexOf() method to find the index of the first occurrence of "." in 'text'
// The result is stored in the 'firstDot' variable
firstDot = text.indexOf(".");
console.log(firstDot);

// Use the indexOf() method to find the index of the first occurrence of "N" in 'text'
// The result is stored in the 'nPosition' variable
nPosition = text.indexOf("N");
console.log(`N is in the ${nPosition} position`);

// Use the indexOf() method to find the index of the first occurrence of "z" in 'text'
// The result is stored in the 'zPosition' variable
// If the character is not found, indexOf() returns -1
zPosition = text.indexOf("z");
console.log(`z is in the ${zPosition} position`);
