import React from "react";
import {
  BODY_HEADERS,
  GUESSED_WORDS_TITLE,
  INSTRUCTIONS_GUESS,
} from "../../utils";
import { AppContext } from "../app/App.context";

const GuessedWords = () => {
  const { guessedWords } = React.useContext(AppContext);
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
              {guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
                <tr key={index} data-test="guessed-word">
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
