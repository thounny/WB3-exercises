// function parseAndDisplayName(fullName) {
//   let spaceIndex = fullName.indexOf(" ");

//   let first = fullName.substring(0, spaceIndex);
//   let last = fullName.substring(spaceIndex + 1);

//   console.log(`Name: ${first} ${last}`);
//   console.log(`First name: ${first}`);
//   console.log(`Last name: ${last}`);
// }

// // Call the function with different names
// parseAndDisplayName("Thounny Keo");
// parseAndDisplayName("Ian Auston");
// parseAndDisplayName("Siddalee Grace");

// Using Splice() only
function parseAndDisplayName(fullName) {
  // Split the fullName string into an array of names
  let nameParts = fullName.split(" "); // Split the string by spaces

  // Use splice to get the first name and last name
  let first = nameParts.splice(0, 1)[0]; // Get the first element and remove it from the array
  let last = nameParts.splice(0, 1)[0]; // Get the next element (last name)

  // Display the names
  console.log(`Name: ${first} ${last}`);
  console.log(`First name: ${first}`);
  console.log(`Last name: ${last}`);
}

// Call the function with different names
parseAndDisplayName("Thounny Keo");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
