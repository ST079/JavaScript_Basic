// const getFormData = () => {
//   const email = document.getElementById("email").value;
//   console.log({ email });
// };

const getQuote = async () => {
  const result = await fetch("https://dummyjson.com/quotes");
  const response = await result.json();
  console.log({ response });
  document.getElementById("quote").innerHTML = response.quotes[0].quote;
};

getQuote();
