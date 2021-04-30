import Proptypes from "prop-types";
import React from "react";
import { INSTRUCTIONS_GUESS } from "./utils";

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length && (
        <span data-test={"guess-instructions"}>{INSTRUCTIONS_GUESS}</span>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: Proptypes.arrayOf(
    Proptypes.shape({
      guessedWord: Proptypes.string.isRequired,
      letterMatchCount: Proptypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
