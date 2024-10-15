function parseAndDisplayName(fullName) {
  let nameParts = fullName.split(" ");

  if (nameParts.length === 1) {
    // One word name
    console.log(`Name: ${nameParts[0]}`);
    console.log(`First name: ${nameParts[0]}`);
    console.log(`Last name: (none)`);
  } else if (nameParts.length === 2) {
    // Two word name
    console.log(`Name: ${nameParts[0]} ${nameParts[1]}`);
    console.log(`First name: ${nameParts[0]}`);
    console.log(`Last name: ${nameParts[1]}`);
  } else {
    // Three or more words
    let first = nameParts[0];
    let last = nameParts.slice(1).join(" ");
    console.log(`Name: ${first} ${last}`);
    console.log(`First name: ${first}`);
    console.log(`Last name: ${last}`);
  }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
