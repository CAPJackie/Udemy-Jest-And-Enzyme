import React from "react";
import PropTypes from "prop-types";
import { AppContext } from "../app/App.context";

export const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const { success, toggleSuccess } = React.useContext(AppContext);
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
              // TODO: Update guessedWords global state
              // TODO: Check against secretWord and optionally update success global state

              e.preventDefault();
              setCurrentGuess("");
              if (success !== (currentGuess === secretWord))
                toggleSuccess(currentGuess === secretWord);
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

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
