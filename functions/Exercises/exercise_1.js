// write a function that reverses a number
console.log("hello world");

const reverser = (num) => {
  let data = String(num);
  const lenOfData = data.length;
  let temp = "";
  for (let i = lenOfData - 1; i >= 0; i--) {
    temp += data[i];
  }
  return temp;
};

console.log(reverser(12345));
