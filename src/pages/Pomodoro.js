import React, { useEffect, useReducer, useRef } from "react";
import "./Pomodoro.css";
import Layout from "../Components/Layout";
import SEO from "../Components/SEO";
import GitLink from '../Components/GitLink';

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;

function convertTwoDigit(time) {
  return time < 10 ? "0" + time : time;
}

function getTime(time) {
  const [a, b] = time.split(":");
  let min = Number(a);
  let sec = Number(b);
  if (sec === 0) {
    min--;
    sec = 59;
  } else {
    sec--;
  }
  return `${convertTwoDigit(min)}:${convertTwoDigit(sec)}`;
}

const initialState = {
  breakLength: DEFAULT_BREAK_LENGTH,
  sessionLength: DEFAULT_SESSION_LENGTH,
  timeLeft: `${DEFAULT_SESSION_LENGTH}:00`,
  isPaused: false,
  timerType: "Session",
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "RESET": {
      const { timerId, audioRef } = state;
      clearTimeout(timerId);
      audioRef.pause();
      audioRef.currentTime = 0;
      return { ...state, ...initialState };
    }
    case "SET_SESSION_LENGTH": {
      const { sessionLength } = state;
      const newSessionLength = sessionLength + payload;
      return {
        ...state,
        sessionLength: newSessionLength,
        timeLeft: `${convertTwoDigit(newSessionLength)}:00`,
      };
    }
    case "SET_BREAK_LENGTH": {
      const { breakLength } = state;
      return { ...state, breakLength: breakLength + payload };
    }
    case "SET_TIME_LEFT": {
      const {
        timeLeft,
        audioRef,
        timerType,
        sessionLength,
        breakLength,
      } = state;
      if (timeLeft === "00:00") {
        audioRef.play();
        const newTimerType = timerType === "Session" ? "Break" : "Session";
        const newTimeLeft = `${convertTwoDigit(
          newTimerType === "Session" ? sessionLength : breakLength
        )}:00`;
        return {
          ...state,
          timerType: newTimerType,
          timeLeft: newTimeLeft,
        };
      }
      return { ...state, timeLeft: getTime(timeLeft), timerId: payload };
    }
    case "TOGGLE_PAUSE": {
      return { ...state, isPaused: !state.isPaused };
    }
    case "SET_FIRST_LOAD": {
      return { ...state, firstLoad: false };
    }
    case "SET_AUDIO_REF": {
      return { ...state, audioRef: payload };
    }
    default:
      return { ...state };
  }
};

function Pomodoro() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerId = useRef();
  const audioRef = useRef(null);
  const { timerType, breakLength, sessionLength, timeLeft, isPaused } = state;

  useEffect(() => {
    if (isPaused) {
      timerId.current = setTimeout(() => {
        dispatch({ type: "SET_TIME_LEFT", payload: timerId.current });
      }, 1000);
    }
    return () => {
      clearTimeout(timerId.current);
    };
  }, [isPaused, timeLeft]);

  useEffect(() => {
    dispatch({ type: "SET_AUDIO_REF", payload: audioRef.current });
  }, [audioRef]);

  return (
    <>
      <SEO title="Pomodoro Clock App"
        description="Freecodecamp Frontend library project. Pomodoro Clock App built with React hooks.">
      </SEO>
      <GitLink link="https://github.com/sidwachche/pomodoro-clock"/>
    <div className="pomo-parent">
      <section className="pomo">
        <h3 id="break-label">Break Length </h3>
        <div className="pomo-btn-container">
          <button
            className="pomo-btn-primary"
            id="break-decrement"
            onClick={() => {
              if (breakLength > 1 && !isPaused)
                dispatch({ type: "SET_BREAK_LENGTH", payload: -1 });
            }}
          >
            -
          </button>
          <div id="break-length">{breakLength}</div>
          <button
            className="pomo-btn-primary"
            id="break-increment"
            onClick={() => {
              if (breakLength < 60 && !isPaused)
                dispatch({ type: "SET_BREAK_LENGTH", payload: 1 });
            }}
          >
            +
          </button>
        </div>
        <h3 id="session-label">Session Length</h3>
        <div className="pomo-btn-container">
          <button
            className="pomo-btn-primary"
            id="session-decrement"
            onClick={() => {
              if (sessionLength > 1 && !isPaused) {
                dispatch({ type: "SET_SESSION_LENGTH", payload: -1 });
              }
            }}
          >
            -
          </button>
          <div id="session-length">{sessionLength}</div>
          <button
            className="pomo-btn-primary"
            id="session-increment"
            onClick={() => {
              if (sessionLength < 60 && !isPaused) {
                dispatch({ type: "SET_SESSION_LENGTH", payload: 1 });
              }
            }}
          >
            +
          </button>
        </div>
        <section className="timer-container">
          <h3 id="timer-label">{timerType}</h3>
          <div id="time-left">{timeLeft}</div>
          <button
            className="pomo-btn-primary"
            id="start_stop"
            onClick={() => {
              dispatch({ type: "TOGGLE_PAUSE" });
            }}
          >
            Start / Pause
          </button>
          <button
            className="pomo-btn-primary"
            id="reset"
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
          >
            Reset
          </button>
          <audio ref={audioRef} id="beep" src="https://goo.gl/65cBl1">
            a digital watch alarm
          </audio>
        </section>
      </section>
    </div>
    </>
  );
}
function App() {
  return (
      <Layout>
        <Pomodoro />
      </Layout>
  )
}
export default App;
