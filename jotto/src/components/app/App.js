import { AppContext } from "./App.context";
import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessed-words/GuessedWords";
import { Input } from "../input/Input";
import { AppActions as Actions } from "./App.actions";
import { appReducer, appInitialState } from "./App.reducer";
import React from "react";
import { getSecretWord } from "../../Actions";
import "./App.css";
import { LanguageContext } from "../language-picker/languagePicker.context";
import LanguagePicker from "../language-picker/languagePicker";

const App = () => {
  const [{ success, guessedWords, secretWord, language }, dispatch] =
    React.useReducer(appReducer, appInitialState);

  const toggleSuccess = React.useCallback((success) => {
    dispatch({ type: Actions.toggleSuccess, success });
  }, []);

  const addGuessedWord = React.useCallback((guessedWord) => {
    dispatch({
      type: Actions.addGuessedWord,
      guessedWord,
    });
  }, []);

  const setSecretWord = React.useCallback((secretWord) => {
    dispatch({
      type: Actions.setSecretWord,
      secretWord,
    });
  }, []);

  const setLanguage = React.useCallback((language) => {
    dispatch({ type: Actions.setLanguage, language });
  }, []);

  React.useEffect(() => {
    getSecretWord(setSecretWord);
  }, [setSecretWord]);

  const languageContext = React.useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  );

  const contextValue = React.useMemo(
    () => ({
      success,
      toggleSuccess,
      guessedWords,
      addGuessedWord,
      secretWord,
    }),
    [success, toggleSuccess, guessedWords, addGuessedWord, secretWord]
  );

  return (
    <LanguageContext.Provider value={languageContext}>
      {Boolean(secretWord) ? (
        <AppContext.Provider value={contextValue}>
          <div className="container" data-test="component-app">
            <h1>Jotto </h1>
            <LanguagePicker setLanguage={setLanguage} />
            <Congrats />
            <GuessedWords />
            <Input />
          </div>
        </AppContext.Provider>
      ) : (
        <div className="container" data-test="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading secret word...</p>
        </div>
      )}
    </LanguageContext.Provider>
  );
};

export default App;
