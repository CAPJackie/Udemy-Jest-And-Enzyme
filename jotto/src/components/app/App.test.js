import App from "./App";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = () => {
  return shallow(<App />);
};

describe("<App />", () => {
  test("Renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent).toHaveLength(1);
  });
});
