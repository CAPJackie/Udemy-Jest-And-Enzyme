import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import { Input } from "./Input";

const setup = (props = {}) => {
  return shallow(<Input {...props} />);
};

describe("<Input />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("It should render successfully", () => {
    const inputContainer = findByTestAttr(wrapper, "input-container");
    expect(inputContainer.length).toBe(1);
  });
});
