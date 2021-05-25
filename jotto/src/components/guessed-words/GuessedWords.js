import React from "react";
import { getStringByLanguage } from "../../helpers/strings";
import { AppContext } from "../app/App.context";
import { LanguageContext } from "../language-picker/languagePicker.context";

const GuessedWords = () => {
  const { guessedWords } = React.useContext(AppContext);
  const { language } = React.useContext(LanguageContext);
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ? (
        <div data-test="guessed-words">
          <h3>{getStringByLanguage(language, "guessColumnHeader")}</h3>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>{getStringByLanguage(language, "guessedWords")}</th>
                <th>
                  {getStringByLanguage(language, "matchingLettersColumnHeader")}
                </th>
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
        <span data-test={"guess-instructions"}>
          {getStringByLanguage(language, "guessPromp")}
        </span>
      )}
    </div>
  );
};

export default GuessedWords;
