import { createContext } from "react";

const INITIAL_CONTEXT_VALUE = {
  success: false,
  toggleSuccess: () => {},
  secretWord: "",
  changeSecretWord: () => {},
  guessedWords: [],
  addGuessedWord: () => {},
};
export const AppContext = createContext(INITIAL_CONTEXT_VALUE);
