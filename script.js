console.log("Namaste World");

// variables

var person = "Kusum";
let person1 = "Sujan";
const person2 = "Kuan";

// interactions
// alert("Warning!!!!");
// const form = prompt("What is your name?");
// console.log(form);

// statements
let num1 = 5;
let num2 = Number("4"); //typecasting

if (num1 > num2) {
  alert(num1 + " is grater than " + num2);
} else {
  alert(num2 + " is grater than " + num1);
}

const value = Number(prompt("Enter value 1-7"));

switch (value) {
  case 1:
    console.log("you are male.");
    break;

  case 2:
    console.log("you are a female");
    break;

  default:
    console.log("Other");
}
