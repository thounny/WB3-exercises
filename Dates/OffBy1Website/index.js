document.getElementById("submitButton").addEventListener("click", function () {
  // Get the value from the input box
  const dateValue = document.getElementById("dateInput").value;

  // Convert the string to a Date object
  const date = new Date(dateValue);

  // Display the date as a string in the paragraph
  const dateString = document.getElementById("message");
  dateString.innerHTML = date.toString();
});
