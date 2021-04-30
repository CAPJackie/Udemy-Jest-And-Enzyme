import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

const setup = (props = {}) => {
  const setupDefaultProps = { success: true, ...props };
  return shallow(<Congrats {...setupDefaultProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const congratsMessageComponent = findByTestAttr(wrapper, "congrats-message");
  expect(congratsMessageComponent.length).toBe(0);
});

test("renders non empty congrats message when prop is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessageComponent = findByTestAttr(wrapper, "congrats-message");
  expect(congratsMessageComponent.text().length).not.toBe(0);
});

test("does not throw warning with expected prop", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
