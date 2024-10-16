let message = "Our corporate offices are located in Dallas";
let array = message.split(" ");

// for (let i = 0; i < 7; i++) {
//   console.log(array[i]);
// }

if (message.toLowerCase().includes("austin")) {
  console.log("String found!");
}

let newMessage = message.replace("Dallas", "austin");

console.log(newMessage);
