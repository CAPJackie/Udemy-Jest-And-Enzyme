import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import { Languages } from "../../helpers/strings";
import { AppContext } from "../app/App.context";
import { LanguageContext } from "../language-picker/languagePicker.context";
import Congrats from "./Congrats";

const setup = (context = { success: true, language: Languages.en }) =>
  mount(
    <LanguageContext.Provider value={{ language: context.language }}>
      <AppContext.Provider value={{ success: context.success }}>
        <Congrats />
        );
      </AppContext.Provider>
    </LanguageContext.Provider>
  );

describe("<Congrats />", () => {
  test("renders without error when success is true", () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.length).toBe(1);
  });

  test("Do not renders container when success is true", () => {
    const wrapper = setup({ success: false });
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.exists()).toBe(false);
  });

  test("renders no text when success prop is false", () => {
    const wrapper = setup({ success: false });
    const congratsMessageComponent = findByTestAttr(
      wrapper,
      "congrats-message"
    );
    expect(congratsMessageComponent.length).toBe(0);
  });

  test("renders non empty congrats message when prop is true", () => {
    const wrapper = setup({ success: true });
    const congratsMessageComponent = findByTestAttr(
      wrapper,
      "congrats-message"
    );
    expect(congratsMessageComponent.text().length).not.toBe(0);
  });
});
