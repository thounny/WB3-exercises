// "use strict";
// // #1
// function test1() {
//   let a = 10;
//   if (a > 5) {
//     a = 7;
//   }
//   console.log("a = " + a);
// }

// test1(); // 7

// // // #2
// // function test2A() {
// //   if (1 == 1) {
// //     var a = 5;
// //   }
// //   console.log("a = " + a);
// // }
// // test2A();

// // function test2B() {
// //   if (1 == 1) {
// //     let a = 5;
// //   }
// //   console.log("a = " + a);
// // }
// // test2B(); // a is not defined

// // #3
// // let a = 4;
// // function test3() {
// //   a = 3;
// //   console.log("a = " + a);
// // }
// // test3();
// // console.log("a = " + a);

// // #4
// let a = 4;
// function test4() {
//   let a = 7;
//   console.log("a = " + a);
// }

// test4();
// console.log("a = " + a);

/*
Global Scope: Variables declared outside of functions can be accessed from anywhere in the program.
Local Scope: Variables declared inside a function can only be accessed within that function and won't affect variables with the same name in the global scope.
*/

// // #5 CHALLENGE
// let a = 4;
// // NO VAR OR LET BEFORE A SO IT CHANGES THE GLOBAL VARIABLE A
// function test5() {
//   a = 7;
//   function again() {
//     let a = 8;
//     console.log("a = " + a);
//   }
//   again();
//   console.log("a = " + a);
// }
// test5();
// console.log("a = " + a);

// #6 CHALLENGE
"use strict";
let a = 4;
function test6() {
  let a = 7;
  function again() {
    let a = 8; // this function runs FIRST
    console.log("a = " + a);
  }
  again(); // this runs after (SECOND) and returns to main function
  console.log("a = " + a);
}
test6();
console.log("a = " + a); // this runs last and it's looking at the global a = 4
