import React from "react";
import PropTypes from "prop-types";

export const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
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
          }}
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
