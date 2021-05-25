import { mount } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../../test/testUtils";
import { Languages } from "../../helpers/strings";
import { AppContext } from "../app/App.context";
import { LanguageContext } from "../language-picker/languagePicker.context";
import Congrats from "./Congrats";
import { languageStrings } from "../../helpers/strings";

const setup = (context = { success: true, language: Languages.en }) =>
  mount(
    <LanguageContext.Provider value={{ language: context.language }}>
      <AppContext.Provider value={{ success: context.success }}>
        <Congrats />
        );
      </AppContext.Provider>
    </LanguageContext.Provider>
  );

//TODO: Fix these tests
describe.skip("congrats", () => {
  describe("languagePicker", () => {
    test("correctly renders congrats string in english", () => {
      const wrapper = setup({ success: true });
      expect(wrapper.text()).toBe(languageStrings.en.congrats);
    });
    test("correctly renders congrats string in spanish", () => {
      const wrapper = setup({ success: true, language: Languages.es });
      expect(wrapper.text()).toBe(languageStrings.es.congrats);
    });
  });

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
});
