import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { CANT_DECREMENT_BUTTON } from "./App.const";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0"); // do this first with an integer and show failure!
});

test("counter increments when button is clicked", () => {
  const wrapper = setup();

  // find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");

  // check the counter
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");

  expect(decrementButton.length).toBe(1);
});

test("counter decrements when decrement button is clicked", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");

  incrementButton.simulate("click");

  const decrementButton = findByTestAttr(wrapper, "decrement-button");

  decrementButton.simulate("click");

  const counter = findByTestAttr(wrapper, "count").text();

  expect(counter).toBe("0");
});

test("Counter do not decrements when count is 0", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("Error message is rendered when user clicks the decrement button and count is 0", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const errorMessage = findByTestAttr(wrapper, "error-message");
  expect(errorMessage.length).toBe(1);
});

test("Error message is not rendered when user clicks the decrement button and count is greater than zero", () => {
  const wrapper = setup();

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");

  const decrementButton2 = findByTestAttr(wrapper, "decrement-button");
  decrementButton2.simulate("click");

  const errorMessage = findByTestAttr(wrapper, "error-message");
  expect(errorMessage.length).toBe(0);
});

test("Error message dissapears when user clicks increment button", () => {
  const wrapper = setup();

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");

  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");

  const errorMessage = findByTestAttr(wrapper, "error-message");
  expect(errorMessage.length).toBe(0);
});
