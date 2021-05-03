import React from "react";
import {
  BODY_HEADERS,
  GUESSED_WORDS_TITLE,
  INSTRUCTIONS_GUESS,
} from "../../utils";

const GuessedWords = ({ guessedWords = [] }) => {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ? (
        <div data-test="guessed-words">
          <h3>{GUESSED_WORDS_TITLE}</h3>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>{BODY_HEADERS.GUESS}</th>
                <th>{BODY_HEADERS.MATCHING_LETTERS}</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map(({ guessedWord, letterMatchCount }) => (
                <tr key={guessedWord} data-test="guessed-word">
                  <td>{guessedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span data-test={"guess-instructions"}>{INSTRUCTIONS_GUESS}</span>
      )}
    </div>
  );
};

export default GuessedWords;
