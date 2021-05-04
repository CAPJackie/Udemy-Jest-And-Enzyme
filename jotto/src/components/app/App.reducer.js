import { getLetterMatchCount } from "../../helpers";
import { addGuessedWord, toggleSuccess } from "./App.actions";

export const appInitialState = {
  success: false,
  guessedWords: [],
  secretWord: "Pineapple",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case toggleSuccess:
      return { ...state, success: action.success };
    case addGuessedWord:
      return {
        ...state,
        guessedWords: state.guessedWords.concat({
          guessedWord: action.guessedWord,
          letterMatchCount: getLetterMatchCount(
            action.guessedWord,
            state.secretWord
          ),
        }),
      };
    default:
      return { ...state };
  }
};
