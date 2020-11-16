import React, { useState } from "react";
import "./RandomQuotes.css";
import quotes from "./quotes";
import Layout from "../Components/Layout";

const colors = [
  "#73A857",
  "#76B1A9",
  "#9B59B6",
  "#E74C3C",
  "#2C3E50",
  "#26AE60",
  "#342224",
  "#2C3E50",
  "#F39C11",
  "#FB6864",
];

function getRandomIndex() {
  return Math.round(Math.random() * (quotes.length - 1));
}
export function getRandomColor() {
  let index = Math.round(Math.random() * (colors.length - 1));
  console.log(index);
  return colors[index];
}

function RandomQuotes() {
  const [color, setColor] = useState("#000");
  const [index, setIndex] = useState(0);
  return (
    <div className="random-quote-container" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <h3 id="text" style={{ color: color }}>
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          {quotes[index].quoteText}
        </h3>
        <h5 id="author" style={{ color: color }}>
          {quotes[index].quoteAuthor}
        </h5>
        <div className="btns-container">
          <span className="social">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quotes[index].quoteText}" ${quotes[index].quoteAuthor}`}
              target="_blank"
              style={{ color }}
              id="tweet-quote"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>

          <button
            id="new-quote"
            style={{ backgroundColor: color }}
            className="btn"
            onClick={() => {
              setIndex(getRandomIndex());
              setColor(getRandomColor());
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
      <Layout>
        <RandomQuotes />
      </Layout>
  )
}
export default App;
