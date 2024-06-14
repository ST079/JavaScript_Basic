// nameless function or anoymous function is a global function
// let a = function () {
//   console.log("heres a nameless function");
// };

//paramaterized function
// pagination
// const pagination = (page = 1, size = 5) => {
//   for (let i = page; i <= size; i++) {
//     console.log(i);
//   }
// };
// pagination();

//inline function is local function
// const footer = function () {
//   console.log("this is a footer");
// };
// footer(); // page 1
// footer(); // page 2
// concept is reausibility

// closure function

// const secret = () => {
//   const password = "password";
//   return password;
// };

// console.log(secret());

// implict function
//normal function
// const additionn = (a, b) => {
//   return a + b;
// };
// //implict function
// const addit = (a, b) => a + b;

//IIFE => immediately invoked functional expression
(function () {
  console.log("i am iffe");
})();
