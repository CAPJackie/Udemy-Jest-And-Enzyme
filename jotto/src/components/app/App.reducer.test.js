import { addGuessedWord, toggleSuccess } from "./App.actions";
import { appReducer } from "./App.reducer";

describe("appReducer", () => {
  test("toggleSuccess", () => {
    const result = appReducer(
      { success: false, guessedWords: [], secretWord: "Table" },
      { success: true, type: toggleSuccess }
    );
    const expectedResult = {
      success: true,
      guessedWords: [],
      secretWord: "Table",
    };
    expect(result).toStrictEqual(expectedResult);
  });

  test("addGuessedWord", () => {
    const result = appReducer(
      { success: false, guessedWords: [], secretWord: "Table" },
      { guessedWord: "Apple", type: addGuessedWord }
    );
    const expectedResult = {
      success: false,
      guessedWords: [{ guessedWord: "Apple", letterMatchCount: 3 }],
      secretWord: "Table",
    };

    expect(result).toStrictEqual(expectedResult);
  });
});
