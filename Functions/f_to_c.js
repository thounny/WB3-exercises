// (93°F − 32) × 5/9 = 33.889°C

function convertFtoC(currentTemp) {
  return ((currentTemp - 32) * 5) / 9;
}

let currentTemp = 212;
let celsiusTemp = convertFtoC(currentTemp);

console.log(
  `${currentTemp} degrees Fahrenheit = ${celsiusTemp.toFixed(
    2
  )} degrees Celsius.`
);
