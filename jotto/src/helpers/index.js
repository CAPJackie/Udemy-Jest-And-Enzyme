export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.toUpperCase().split("");
  const guessedLetteSet = new Set(guessedWord.toUpperCase());
  return secretLetters.filter((letter) => guessedLetteSet.has(letter)).length;
};
