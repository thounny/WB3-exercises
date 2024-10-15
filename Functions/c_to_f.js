// (19°C × 9/5) + 32 = 66.2°F

function convertCtoF(currentTemp) {
  return (currentTemp * 9) / 5 + 32;
}

let currentTemp = -7;
let fahrenHeitTemp = convertCtoF(currentTemp);

console.log(
  `${currentTemp} degrees Celsius = ${fahrenHeitTemp} degrees Fahrenheit`
);
