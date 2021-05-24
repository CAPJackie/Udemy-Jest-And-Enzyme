import { shallow } from "enzyme";
import React from "react";
import LanguagePicker from "./languagePicker";
import { findByTestAttr } from "../../../test/testUtils";

const mockSetLanguage = jest.fn();
const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

describe("<LanguagePicker />", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-language-picker");
    expect(component.exists()).toBe(true);
  });
  test("renders non-zero language icons", () => {
    const wrapper = setup();
    const languageIcons = findByTestAttr(wrapper, "language-icon");
    expect(languageIcons.length).toBeGreaterThan(0);
  });
  test("calls setLanguage props upon click", () => {
    const wrapper = setup();
    const languageIcons = findByTestAttr(wrapper, "language-icon");

    const firstIcon = languageIcons.first();
    firstIcon.simulate("click");

    expect(mockSetLanguage).toHaveBeenCalled();
  });
});
