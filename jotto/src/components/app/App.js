import { AppContext } from "./App.context";
import "./App.css";
import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessed-words/GuessedWords";
import { Input } from "../input/Input";
import { AppActions as Actions } from "./App.actions";
import { appReducer, appInitialState } from "./App.reducer";
import React from "react";

const App = () => {
  const [{ success }, dispatch] = React.useReducer(appReducer, appInitialState);

  const toggleSuccess = (success) => {
    dispatch({ type: Actions.toggleSuccess, success });
  };
  const contextValue = {
    success,
    toggleSuccess,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="container">
        <h1>Jotto </h1>
        <Congrats />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
        <Input secretWord="Word" />
      </div>
    </AppContext.Provider>
  );
};

export default App;
