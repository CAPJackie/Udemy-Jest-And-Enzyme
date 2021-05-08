import React from "react";
import App from "./App";
import { findByTestAttr } from "../../../test/testUtils";
import { mount } from "enzyme";

//Activate global mock to make sure getSecretWord doen't make network call
jest.mock("../../Actions");
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from "../../Actions";

const dispatch = jest.fn();

const setup = () => {
  // Using mount instead of shallow because shallow do not trigger useEffect
  return mount(<App />);
};

describe.each([
  [null, true, false],
  ["Party", false, true],
])("Renders with secretWord as %s", (secretWord, loadingShows, appShows) => {
  let wrapper;
  beforeEach(() => {
    jest
      .spyOn(React, "useReducer")
      .mockReturnValue([
        { success: false, guessedWords: [], secretWord },
        dispatch,
      ]);

    wrapper = setup();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test(`Renders loading spinner: ${loadingShows}`, () => {
    const spinner = findByTestAttr(wrapper, "spinner");
    expect(spinner.exists()).toBe(loadingShows);
  });
  test(`Renders app: ${appShows}`, () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(appShows);
  });
});

describe("Get secret Word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
    jest
      .spyOn(React, "useReducer")
      .mockReturnValue([
        { success: false, guessedWords: [], secretWord: "Test" },
        dispatch,
      ]);
  });
  test("getSecretWord on app mount", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    //using setProps because update() does not trigger useEffect (there's an issue on GH)
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
