import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../../test/testUtils";
import { Input } from "./Input";

const setCurrentGuessMock = jest.fn();
const toggleSuccess = jest.fn();

const setup = (props = {}) => {
  const defaultProps = { secretWord: "Table", ...props };
  return shallow(<Input {...defaultProps} />);
};

describe("<Input />", () => {
  let wrapper;
  beforeEach(() => {
    setCurrentGuessMock.mockClear();
    toggleSuccess.mockClear();
    jest.spyOn(React, "useState").mockReturnValue(["", setCurrentGuessMock]);
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ success: false, toggleSuccess });
    wrapper = setup();
  });
  test("It should render successfully", () => {
    const inputContainer = findByTestAttr(wrapper, "input-container");
    expect(inputContainer.length).toBe(1);
  });

  test("It changes input component state when user types something", () => {
    //Simulate user typing a word into de input component
    const inputText = findByTestAttr(wrapper, "input-box");
    inputText.simulate("change", { target: { value: "Apple" } });
    //Expect setCurrentGuessMock being called everytime the input changes
    expect(setCurrentGuessMock).toHaveBeenCalledWith("Apple");
  });

  test("It resets the currentGuess when user clicks the button", () => {
    const button = findByTestAttr(wrapper, "submit-button");
    button.simulate("click", { preventDefault: () => {} });
    expect(setCurrentGuessMock).toHaveBeenCalledWith("");
  });
});
