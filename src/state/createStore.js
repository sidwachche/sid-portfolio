import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = { result: "0", inputArr: [], lastType: "" };

const reducer = (state, action) => {
  const { type, payload } = action;
  const { result, lastType, inputArr } = state;
  const lastIndex = inputArr.length - 1;
  switch (type) {
    case "number": {
      if (result === "0" && payload === "0") return state;
      const last = inputArr[lastIndex];
      let currentArr, currentResult;

      if (lastType === "decimal") {
        currentResult = result + payload;
        currentArr = [...inputArr.slice(0, lastIndex), currentResult];
      } else if (result === "-" && ["+", "*", "/"].includes(last)) {
        currentResult = result + payload;
        currentArr = [...inputArr, currentResult];
      } else if (lastType !== type) {
        currentResult = payload;
        currentArr = [...inputArr, currentResult];
      } else {
        currentResult = result + payload;
        currentArr = [...inputArr.slice(0, lastIndex), currentResult];
      }
      return {
        ...state,
        result: currentResult,
        inputArr: currentArr,
        lastType: type,
      };
    }

    case "operation": {
      if (lastType === type) {
        if (payload === "-") {
          return {
            ...state,
            result: payload,
          };
        } else {
          return {
            ...state,
            result: payload,
            inputArr: [...inputArr.slice(0, lastIndex), payload],
            lastType: type,
          };
        }
      }
      return {
        ...state,
        result: payload,
        inputArr: [...inputArr, payload],
        lastType: type,
      };
    }
    case "decimal": {
      if (result.indexOf(".") > -1) return state;
      return {
        ...state,
        result: lastType === "number" ? result + "." : "0.",
        lastType: type,
      };
    }
    case "clear": {
      return initialState;
    }
    case "equal": {
      if (inputArr.length < 3)
        return { result: inputArr[0], inputArr: [inputArr[0]], lastType: "" };
      const fullLength =
        inputArr.length % 2 === 0 ? inputArr.length - 1 : inputArr.length;
      const length = Math.floor(fullLength / 2);
      let total = null;
      for (let i = 0; i < length; i++) {
        const mid = i * 2 + 1;
        const first = total === null ? parseFloat(inputArr[mid - 1]) : total;
        const operation = inputArr[mid];
        const second = parseFloat(inputArr[mid + 1]);

        switch (operation) {
          case "+":
            total = first + second;
            break;

          case "-":
            total = first - second;

            break;

          case "/":
            total = first / second;
            break;

          case "*":
            total = first * second;
            break;
          default:
            break;
        }
      }
      return { result: total, inputArr: [total], lastType: "" };
    }
    default:
      return state;
  }
};

const composedEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(reducer, initialState, composedEnhancers());

export default store;
