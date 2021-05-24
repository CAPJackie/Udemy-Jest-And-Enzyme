import { getLetterMatchCount } from "../../helpers";
import { Languages } from "../../helpers/strings";
import {
  addGuessedWord,
  setLanguage,
  setSecretWord,
  toggleSuccess,
} from "./App.actions";

export const appInitialState = {
  success: false,
  guessedWords: [],
  secretWord: null,
  language: Languages.en,
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
    case setSecretWord:
      return { ...state, secretWord: action.secretWord };

    case setLanguage:
      return { ...state, language: action.language };
    default:
      return { ...state };
  }
};
