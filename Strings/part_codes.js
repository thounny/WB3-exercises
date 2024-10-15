// Function to get the supplier code from the partCode
function getSupplier(code) {
  // Split the string at ":" and return the first part (the supplier code)
  let parts = code.split(":");
  return parts[0];
}

// Function to get the product number from the partCode
function getProductNumber(code) {
  // Split the string at ":" to get the second part, then split it at "-" to get the product number
  let parts = code.split(":");
  let productDetails = parts[1].split("-");
  return productDetails[0];
}

// Function to get the size from the partCode
function getSize(code) {
  // Split the second part of the string at "-" and return the second part (the size)
  let parts = code.split("-");
  return parts[1];
}

// Main function to parse the partCode and display the result
function parsePartCode(partCode) {
  // Get the supplier, product number, and size using the helper functions
  let supplierCode = getSupplier(partCode);
  let productNumber = getProductNumber(partCode);
  let size = getSize(partCode);

  // Use a simple if-else structure to describe the size
  let sizeDescription = "";
  if (size === "S") {
    sizeDescription = "small (S)";
  } else if (size === "M") {
    sizeDescription = "medium (M)";
  } else if (size === "L") {
    sizeDescription = "large (L)";
  } else {
    sizeDescription = `size ${size}`;
  }

  console.log(
    `The ${sizeDescription} part ${productNumber} is supplied by ${supplierCode}.`
  );
}

// Example part codes to test the function
parsePartCode("ACME:123-L");
parsePartCode("DI:12345-M");
parsePartCode("ACE:1-12");
