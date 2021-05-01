import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { Input } from "./Input";

const setCurrentGuessMock = jest.fn();

const setup = (props = {}) => {
  const defaultProps = { secretWord: "", ...props };
  return shallow(<Input {...defaultProps} />);
};

describe("<Input />", () => {
  let wrapper;
  beforeEach(() => {
    jest.spyOn(React, "useState").mockReturnValue(["", setCurrentGuessMock]);
    wrapper = setup();
  });
  test("It should render successfully", () => {
    const inputContainer = findByTestAttr(wrapper, "input-container");
    expect(inputContainer.length).toBe(1);
  });
  test("does not throw warning with expected prop", () => {
    checkProps(Input, { secretWord: "apple" });
  });

  test("It changes input component state when user types something", () => {
    //Simulate user typing a word into de input component
    const inputText = findByTestAttr(wrapper, "input-box");
    inputText.simulate("change", { target: { value: "Apple" } });
    //Expect setCurrentGuessMock being called everytime the input changes
    expect(setCurrentGuessMock).toHaveBeenCalled();
  });
});
