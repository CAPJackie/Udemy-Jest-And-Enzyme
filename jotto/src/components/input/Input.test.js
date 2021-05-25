import { mount } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../../test/testUtils";
import { Languages, languageStrings } from "../../helpers/strings";
import { AppContext } from "../app/App.context";
import { LanguageContext } from "../language-picker/languagePicker.context";
import { Input } from "./Input";

const setCurrentGuessMock = jest.fn();
const toggleSuccess = jest.fn();
const addGuessedWord = jest.fn();

const setup = (
  context = {
    success: false,
    toggleSuccess,
    secretWord: "Table",
    addGuessedWord,
    language: Languages.en,
  }
) =>
  mount(
    <LanguageContext.Provider value={{ language: context.language }}>
      <AppContext.Provider
        value={{
          success: context.success,
          toggleSuccess: context.toggleSuccess,
          secretWord: context.secretWord,
          addGuessedWord: context.addGuessedWord,
        }}
      >
        <Input />
      </AppContext.Provider>
    </LanguageContext.Provider>
  );
// TODO: Fix Tests
describe.skip("languagePicker", () => {
  test("correctly renders submit string in english", () => {
    const wrapper = setup();
    expect(wrapper.text()).toBe(languageStrings.en.submit);
  });
  test("correctly renders submit string in spanish", () => {
    const wrapper = setup({ language: Languages.es });
    expect(wrapper.text()).toBe(languageStrings.es.submit);
  });
});
// TODO: Fix Tests
describe.skip("<Input />", () => {
  beforeEach(() => {
    setCurrentGuessMock.mockClear();
    toggleSuccess.mockClear();
    jest
      .spyOn(React, "useState")
      .mockReturnValue(["Test", setCurrentGuessMock]);
  });
  test("It should render successfully", () => {
    const wrapper = setup();
    const inputContainer = findByTestAttr(wrapper, "input-container");
    expect(inputContainer.length).toBe(1);
  });

  test("It changes input component state when user types something", () => {
    const wrapper = setup();
    //Simulate user typing a word into de input component
    const inputText = findByTestAttr(wrapper, "input-box");
    inputText.simulate("change", { target: { value: "Apple" } });
    //Expect setCurrentGuessMock being called everytime the input changes
    expect(setCurrentGuessMock).toHaveBeenCalledWith("Apple");
  });

  test("It resets the currentGuess when user clicks the button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click", { preventDefault: () => {} });
    expect(setCurrentGuessMock).toHaveBeenCalledWith("");
  });
  test("Adds the guessed word to the table when currentGuess is not empty", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click", { preventDefault: () => {} });
    expect(addGuessedWord).toHaveBeenCalledWith("Test");
  });
  test("Do not add guessed word to the table when the input field is empty", () => {
    const wrapper = setup({
      success: false,
      toggleSuccess,
      secretWord: "Table",
      addGuessedWord,
    });
    //TODO: Refactor code
    jest.spyOn(React, "useState").mockReturnValue(["", setCurrentGuessMock]);
    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click", { preventDefault: () => {} });
    expect(addGuessedWord).not.toHaveBeenCalled();
  });
});
