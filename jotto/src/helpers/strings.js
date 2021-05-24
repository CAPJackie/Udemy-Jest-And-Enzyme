const languageStrings = {
  en: {
    congrats: "Congratulations! you guessed the word!",
    submit: "Submit",
    guessPromp: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed words",
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
  },
  es: {
    congrats: "Felicitaciones! has adivinado la palabra!",
    submit: "Enviar",
    guessPromp: "Intenta adivinar la palabra secreta!",
    guessInputPlaceholder: "ingresa la palabra",
    guessColumnHeader: "Palabras adivinadas",
    guessedWords: "Adivinadas",
    matchingLettersColumnHeader: "Coincidencias",
  },
};

export const getStringByLanguage = (
  languageCode,
  stringKey,
  strings = languageStrings
) => {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    //fall back to english
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey];
};

export const Languages = { en: "en", es: "es" };
