// Create a new Date object for July 27, 2022

let date = new Date(2022, 6, 27);

// Get the day, year, and weekday
let day = date.getDate();
let year = date.getFullYear();

// Create an array of month names
// Note: Month is 0-indexed (0 = January, 6 = July)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Get the month as a string
let month = months[date.getMonth()]; // Get the month name

// Create an array of weekday names
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the day of the week as a string
let weekday = weekdays[date.getDay()];

// Format the custom date string
let customDate = day + "-" + month + "-" + year + "(" + weekday + ")";

// Display the formatted date
console.log(customDate);
