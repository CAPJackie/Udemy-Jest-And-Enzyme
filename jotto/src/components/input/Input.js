import React from "react";
import { AppContext } from "../app/App.context";

export const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const {
    success,
    toggleSuccess,
    secretWord,
    addGuessedWord,
  } = React.useContext(AppContext);

  return (
    !success && (
      <div data-test="input-container">
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="Enter guess"
            value={currentGuess}
            onChange={(e) => {
              setCurrentGuess(e.target.value);
            }}
          />
          <button
            data-test="submit-button"
            onClick={(e) => {
              e.preventDefault();
              const curGuess = currentGuess;
              if (Boolean(curGuess)) {
                addGuessedWord(curGuess);
              }
              if (success !== (curGuess === secretWord)) {
                toggleSuccess(curGuess === secretWord);
              }
              setCurrentGuess("");
            }}
            className="btn btn-primary mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};
