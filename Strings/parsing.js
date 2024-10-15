function parseAndDisplayName(fullName) {
  let spaceIndex = fullName.indexOf(" ");

  let first = fullName.substring(0, spaceIndex);
  let last = fullName.substring(spaceIndex + 1);

  console.log(`Name: ${first} ${last}`);
  console.log(`First name: ${first}`);
  console.log(`Last name: ${last}`);
}

// Call the function with different names
parseAndDisplayName("Thounny Keo");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
