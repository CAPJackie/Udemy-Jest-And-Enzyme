import { getStringByLanguage, Languages } from "./strings";

const strings = {
  en: { submit: "submit" },
  es: { submit: "enviar" },
  mermish: {},
};

const mockWarn = jest.fn();
describe("getStringByLanguage", () => {
  let originalWarn = console.warn;
  beforeEach(() => {
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  test("returns correct submit string for english", () => {
    const string = getStringByLanguage(Languages.en, "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns the correct submit string for spanish", () => {
    const string = getStringByLanguage(Languages.es, "submit", strings);
    expect(string).toBe("enviar");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns english submit string when language does not exist", () => {
    const string = getStringByLanguage("notALanguage", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string [submit] for [notALanguage]"
    );
  });

  test("returns english submit string when submit key does not exist for language", () => {
    const string = getStringByLanguage("mermish", "submit", strings);

    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string [submit] for [mermish]"
    );
  });
});
