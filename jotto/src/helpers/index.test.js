import { getLetterMatchCount } from ".";

describe("getLetterMatchCount", () => {
  test("Returns correct count when there are no matching letters", () => {
    const guessedWord = "Table";
    const secretWord = "pop";
    expect(getLetterMatchCount(guessedWord, secretWord)).toBe(0);
  });
  test("Returns correct count when there are matching letters", () => {
    const guessedWord = "Table";
    const secretWord = "Cible";
    expect(getLetterMatchCount(guessedWord, secretWord)).toBe(3);
  });

  test("Returns correct count when using different letter cases", () => {
    const guessedWord = "TEST";
    const secretWord = "Test";
    expect(getLetterMatchCount(guessedWord, secretWord)).toBe(4);
  });

  test("Returns correct count when there are repeated letters", () => {
    const guessedWord = "abeja";
    const secretWord = "abeja";
    expect(getLetterMatchCount(guessedWord, secretWord)).toBe(5);
  });
});
