import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CANT_DECREMENT_BUTTON } from "./App.const";

function App() {
  const [count, setCount] = React.useState(0);
  const [isError, setIsError] = React.useState(false);

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => {
          if (isError) {
            setIsError(false);
          }

          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setIsError(true);
          }
        }}
      >
        Decrement counter
      </button>
      {isError && (
        <span data-test="error-message">{CANT_DECREMENT_BUTTON}</span>
      )}
    </div>
  );
}

export default App;
