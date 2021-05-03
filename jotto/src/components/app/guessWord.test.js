import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../../../test/testUtils";

const setup = (state = {}) => {
  //TODO: Apply State
  const wrapper = mount(<App />);

  //Add value to Input Box
  const inputText = findByTestAttr(wrapper, "input-box");
  inputText.simulate("change", { target: { value: "train" } });

  //Simulate click on submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault: () => {} });

  return wrapper;
};

//TODO: Wire up the app using context api for every test until they're passed
describe.skip("The jotto game is playable", () => {
  describe("No words guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({
        secretWord: "party",
        success: false,
        guessedWords: [],
      });
    });
    test("Creates GuessedWords Table with one row", () => {
      const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordsNodes).toHaveLength(1);
    });
  });

  describe("Some words have been guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({
        secretWord: "party",
        success: false,
        guessedWords: [
          {
            guessedWord: "train",
            letterMatchCount: 3,
          },
          {
            guessedWords: "apple",
            letterMatchCount: 2,
          },
        ],
      });
    });
    test("GuessedWord table has 3 rows", () => {
      const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordsNodes).toHaveLength(3);
    });
  });

  describe("Guess secret word", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({
        secretWord: "party",
        success: false,
        guessedWords: [],
      });

      //Change input box
      const inputText = findByTestAttr(wrapper, "input-box");
      inputText.simulate("change", { target: { value: "party" } });

      //submit button again
      const submitButton = findByTestAttr(wrapper, "submit-button");
      submitButton.simulate("click", { preventDefault: () => {} });
    });
    test("Congrats message is thrown", () => {
      const congratsMessage = findByTestAttr(wrapper, "congrats-message");
      expect(congratsMessage.text().length).toBeGreaterThan(0);
    });

    test("Adds row to GuessedWords table", () => {
      const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordsNodes).toHaveLength(2);
    });
    test("Do not display input component contents", () => {
      const inputComponent = findByTestAttr(wrapper, "input-container");
      expect(inputComponent.exists()).toBe(false);
    });
  });
});
