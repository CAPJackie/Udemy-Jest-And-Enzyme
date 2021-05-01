import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../../test/testUtils";
import Congrats from "./Congrats";

const setup = (props = {}) => {
  const setupDefaultProps = { success: true, ...props };
  return shallow(<Congrats {...setupDefaultProps} />);
};

describe("<Congrats />", () => {
  test("renders without error when success is true", () => {
    jest.spyOn(React, "useContext").mockReturnValue({ success: true });
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.length).toBe(1);
  });

  test("Do not renders container when success is true", () => {
    jest.spyOn(React, "useContext").mockReturnValue({ success: false });
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.exists()).toBe(false);
  });

  test("renders no text when success prop is false", () => {
    jest.spyOn(React, "useContext").mockReturnValue({ success: false });
    const wrapper = setup();
    const congratsMessageComponent = findByTestAttr(
      wrapper,
      "congrats-message"
    );
    expect(congratsMessageComponent.length).toBe(0);
  });

  test("renders non empty congrats message when prop is true", () => {
    jest.spyOn(React, "useContext").mockReturnValue({ success: true });
    const wrapper = setup();
    const congratsMessageComponent = findByTestAttr(
      wrapper,
      "congrats-message"
    );
    expect(congratsMessageComponent.text().length).not.toBe(0);
  });
});
