import React, { useState } from "react";
import "./RandomQuotes.css";
import Layout from "../Components/Layout";
import SEO from "../Components/SEO";
import GitLink from '../Components/GitLink';

const quotes = [
  {
    quoteText:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison",
  },
  {
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra",
  },
  {
    quoteText: "A house divided against itself cannot stand.",
    quoteAuthor: "Abraham Lincoln",
  },
  {
    quoteText: "Difficulties increase the nearer we get to the goal.",
    quoteAuthor: "Johann Wolfgang von Goethe",
  },
  {
    quoteText: "Fate is in your hands and no one elses",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText: "Be the chief but never the lord.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Nothing happens unless first we dream.",
    quoteAuthor: "Carl Sandburg",
  },
  {
    quoteText: "Well begun is half done.",
    quoteAuthor: "Aristotle",
  },
  {
    quoteText: "Life is a learning experience, only if you learn.",
    quoteAuthor: "Yogi Berra",
  },
  {
    quoteText: "Self-complacency is fatal to progress.",
    quoteAuthor: "Margaret Sangster",
  },
  {
    quoteText: "Peace comes from within. Do not seek it without.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "What you give is what you get.",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText: "We can only learn to love by loving.",
    quoteAuthor: "Iris Murdoch",
  },
  {
    quoteText: "Life is change. Growth is optional. Choose wisely.",
    quoteAuthor: "Karen Clark",
  },
  {
    quoteText: "You'll see it when you believe it.",
    quoteAuthor: "Wayne Dyer",
  },
  {
    quoteText: "Today is the tomorrow we worried about yesterday.",
    quoteAuthor: "",
  },
  {
    quoteText: "It's easier to see the mistakes on someone else's paper.",
    quoteAuthor: "",
  },
  {
    quoteText: "Every man dies. Not every man really lives.",
    quoteAuthor: "",
  },
  {
    quoteText: "To lead people walk behind them.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Having nothing, nothing can he lose.",
    quoteAuthor: "William Shakespeare",
  },
  {
    quoteText: "Trouble is only opportunity in work clothes.",
    quoteAuthor: "Henry J. Kaiser",
  },
  {
    quoteText: "A rolling stone gathers no moss.",
    quoteAuthor: "Publilius Syrus",
  },
  {
    quoteText: "Ideas are the beginning points of all fortunes.",
    quoteAuthor: "Napoleon Hill",
  },
  {
    quoteText: "Doing nothing is better than being busy doing nothing.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Trust yourself. You know more than you think you do.",
    quoteAuthor: "Benjamin Spock",
  },
  {
    quoteText: "Study the past, if you would divine the future.",
    quoteAuthor: "Confucius",
  },
  {
    quoteText: "The day is already blessed, find peace within it.",
    quoteAuthor: "",
  },
  {
    quoteText: "From error to error one discovers the entire truth.",
    quoteAuthor: "Sigmund Freud",
  },
  {
    quoteText: "Well done is better than well said.",
    quoteAuthor: "Benjamin Franklin",
  },
  {
    quoteText: "Bite off more than you can chew, then chew it.",
    quoteAuthor: "Ella Williams",
  },
  {
    quoteText: "Work out your own salvation. Do not depend on others.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "One today is worth two tomorrows.",
    quoteAuthor: "Benjamin Franklin",
  },
  {
    quoteText: "Once you choose hope, anythings possible.",
    quoteAuthor: "Christopher Reeve",
  },
  {
    quoteText: "God always takes the simplest way.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText: "One fails forward toward success.",
    quoteAuthor: "Charles Kettering",
  },
  {
    quoteText: "From small beginnings come great things.",
    quoteAuthor: "",
  },
  {
    quoteText: "Learning is a treasure that will follow its owner everywhere",
    quoteAuthor: "Chinese proverb",
  },
  {
    quoteText: "Be as you wish to seem.",
    quoteAuthor: "Socrates",
  },
  {
    quoteText: "The world is always in movement.",
    quoteAuthor: "V. Naipaul",
  },
  {
    quoteText: "Never mistake activity for achievement.",
    quoteAuthor: "John Wooden",
  },
  {
    quoteText: "What worries you masters you.",
    quoteAuthor: "Haddon Robinson",
  },
  {
    quoteText: "One faces the future with ones past.",
    quoteAuthor: "Pearl Buck",
  },
  {
    quoteText: "Goals are the fuel in the furnace of achievement.",
    quoteAuthor: "Brian Tracy",
  },
  {
    quoteText: "Who sows virtue reaps honour.",
    quoteAuthor: "Leonardo da Vinci",
  },
  {
    quoteText: "Be kind whenever possible. It is always possible.",
    quoteAuthor: "Dalai Lama",
  },
  {
    quoteText: "Talk doesn't cook rice.",
    quoteAuthor: "Chinese proverb",
  },
  {
    quoteText: "He is able who thinks he is able.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "Be as you wish to seem.",
    quoteAuthor: "Socrates",
  },
  {
    quoteText: "A goal without a plan is just a wish.",
    quoteAuthor: "Larry Elder",
  },
  {
    quoteText: "To succeed, we must first believe that we can.",
    quoteAuthor: "Michael Korda",
  },
  {
    quoteText: "Learn from yesterday, live for today, hope for tomorrow.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText: "A weed is no more than a flower in disguise.",
    quoteAuthor: "James Lowell",
  },
  {
    quoteText: "Do, or do not. There is no try.",
    quoteAuthor: "Yoda",
  },
];
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
  return colors[index];
}

function RandomQuotes() {
  const [color, setColor] = useState("#000");
  const [index, setIndex] = useState(0);
  return (
    <>
      <SEO title="Random Quote App"
        description="Freecodecamp Frontend library project. Random Quote App built with React hooks.">
      </SEO>
      <GitLink link="https://github.com/sidwachche/Random_quotes"/>
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
    </>
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
