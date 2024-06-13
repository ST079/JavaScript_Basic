//even and odd cheacker

const num1 = Number(prompt("Enter a number1"));
// const num2 = Number(prompt("Enter a number2"));

// e5 function
// function isOddEven(a) {
//   return a % 2 == 0;
// }

// const result = isOddEven()
//   ? console.log("Number is even ")
//   : console.log("Number is odd");

// e6 function
// const add = (a, b) => {
//   return a + b;
// };

// let result = add(num1, num2);

// console.log(result);

// multiplication table of any nunber
const mul = (num1) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num1 + " x " + i + " = " + num1 * i);
  }
};
mul(num1);
