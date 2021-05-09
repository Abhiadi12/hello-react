import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../testHelpers/util";
import Congrats from "./Congrats";

/**
 * Factory function to create a ShallowWrapper for the Congrats component .
 * @function setup
 * @params flag
 * @returs {ShallowWrapper}
 */

const setup = (props = {}) => shallow(<Congrats {...props} />);

test("Render the Congrats component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.length).toBe(1);
});

test("Render no message when flag props is false", () => {
  const wrapper = setup({ flag: false });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.length).toBe(0);
});

test("Render the non-empty message when the flag is true", () => {
  const wrapper = setup({ flag: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.length).toBe(1);
});
