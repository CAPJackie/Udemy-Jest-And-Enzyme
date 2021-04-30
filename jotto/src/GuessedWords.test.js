import React from "react";
import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { shallow } from "enzyme";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Do not throw warning with excepted props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without an error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("Renders an instruction to guessed a word", () => {
    const component = findByTestAttr(wrapper, "guess-instructions");
    expect(component.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without an error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("Renders guessed words section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("Correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
