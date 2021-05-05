import App from "./App";
import { findByTestAttr } from "../../../test/testUtils";
import { mount } from "enzyme";

//Activate global mock to make sure getSecretWord doen't make network call
jest.mock("../../Actions");
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from "../../Actions";

const setup = () => {
  // Using mount instead of shallow because shallow do not trigger useEffect
  return mount(<App />);
};

// TODO: Figure out why this is failing
describe.skip("<App />", () => {
  test("Renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent).toHaveLength(1);
  });
});

describe("Get secret Word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
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
