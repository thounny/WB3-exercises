const d = new Date();

const stringDate = d.toString();
const dateString = d.toDateString();
const utcString = d.toUTCString();
const localeString = d.toLocaleDateString();

console.log(stringDate);
console.log(dateString);
console.log(utcString);
console.log(localeString);
