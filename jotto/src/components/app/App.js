import { AppContext } from "./App.context";
import "./App.css";
import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessed-words/GuessedWords";
import { Input } from "../input/Input";
import { AppActions as Actions } from "./App.actions";
import { appReducer, appInitialState } from "./App.reducer";
import React from "react";

const App = () => {
  const [{ success, guessedWords, secretWord }, dispatch] = React.useReducer(
    appReducer,
    appInitialState
  );

  const toggleSuccess = React.useCallback((success) => {
    dispatch({ type: Actions.toggleSuccess, success });
  }, []);

  const addGuessedWord = React.useCallback((guessedWord) => {
    dispatch({
      type: Actions.addGuessedWord,
      guessedWord,
    });
  }, []);

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
    <AppContext.Provider value={contextValue} data-test="component-app">
      <div className="container">
        <h1>Jotto </h1>
        <Congrats />
        <GuessedWords />
        <Input />
      </div>
    </AppContext.Provider>
  );
};

export default App;
