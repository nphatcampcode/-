let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let prevBtn = document.getElementById("prevBtn");
const url = "https://api.quotable.io/random";
let previousQuote = null;

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // Store the current quote as the previous quote
      previousQuote = {
        content: quote.innerText,
        author: author.innerText
      };
      // Display the new quote
      quote.innerText = item.content;
      author.innerText = "-" + item.author;
    });
};

let showPreviousQuote = () => {
  if (previousQuote) {
    // Restore the previous quote
    quote.innerText = previousQuote.content;
    author.innerText =  previousQuote.author;
    previousQuote = null; // Clear the stored previous quote
  }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
prevBtn.addEventListener("click", showPreviousQuote);