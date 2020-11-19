import React from "react";
import "./Calculator.css";
import SEO from "../Components/SEO";
import GitLink from '../Components/GitLink';
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Components/Layout";

const config = [
  { type: "clear", id: "clear", text: "AC", customClass: "border-radius-20" },
  { type: "operation", id: "divide", text: "/" },
  { type: "number", id: "seven", text: "7" },
  { type: "number", id: "eight", text: "8" },
  { type: "number", id: "nine", text: "9" },
  { type: "operation", id: "multiply", text: "*" },
  { type: "number", id: "four", text: "4" },
  { type: "number", id: "five", text: "5" },
  { type: "number", id: "six", text: "6" },
  { type: "operation", id: "subtract", text: "-" },
  { type: "number", id: "one", text: "1" },
  { type: "number", id: "two", text: "2" },
  { type: "number", id: "three", text: "3" },
  { type: "operation", id: "add", text: "+" },
  { type: "number", id: "zero", text: "0", customClass: "border-radius-20" },
  { type: "decimal", id: "decimal", text: "." },
  { type: "equal", id: "equals", text: "=" },
];

function Calculator() {
  const dispatch = useDispatch();
  const inputArr = useSelector((state) => state.inputArr);
  const result = useSelector((state) => state.result);

  return (
    <>
      <SEO title="React-Redux Calculator App"
        description="Freecodecamp Frontend library project. Calculator app built with React and redux.">
      </SEO>
      <GitLink link="https://github.com/sidwachche/calculator"/>
      <section className="calc-app">
        <div className="calc-grid">
          <div className="calc-result">
            <div>{inputArr}</div>
            <div id="calc-display">{result}</div>
          </div>
          {config.map(({ text, id, customClass, type }) => {
            return (
              <button
                key={text}
                id={id}
                className={`calc-btn ${customClass}`}
                onClick={() => {
                  dispatch({ type, payload: text });
                }}
              >
                {text}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
function App() {
  return (
    <Layout>
      <Calculator />
    </Layout>
  )
}
export default App;
