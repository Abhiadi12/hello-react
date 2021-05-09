import React from "react";
import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../testHelpers/util";
import Input from "./Input";
import { Provider } from "react-redux";

/**
 * Factory function to create a ShallowWrapper for the Input component .
 * @function setup
 * @params {value}
 * @returs {ShallowWrapper}
 */

const setup = (initialState = {}, secreatWord = "") => {
  const store = storeFactory(initialState);
  console.log(store.getState());

  return mount(
    <Provider store={store}>
      <Input secretWord={secreatWord} />
    </Provider>
  );
};

//To test useSelector we choose the Provider + Mount approch so we can't use shallow render .
//---------------------------------------
// for destructing import of state
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

describe("render component based on flag prop", () => {
  describe("when flag is true i.e user guess the secreat word", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("component render without error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    }),
      test("Do't render the input box", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        console.log(wrapper.debug());
        expect(inputBox.exists()).toBe(false);
      }),
      test("Do't render the submit btn", () => {
        const inputBox = findByTestAttr(wrapper, "submit-btn");
        expect(inputBox.exists()).toBe(false);
      });
  });

  describe("when flag is false i.e user does't guess the secreat word", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("component render without error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    }),
      test("render the input box", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        expect(inputBox.exists()).toBe(true);
      }),
      test("render the submit button", () => {
        const inputBox = findByTestAttr(wrapper, "submit-btn");
        expect(inputBox.exists()).toBe(true);
      });
  });
});

// test("Render input component without any error", () => {
//   const wrapper = setup();
//   const component = findByTestAttr(wrapper, "input-component");
//   expect(component.length).toBe(1);
// });

// test for state controll ( the below test will not work for destructing useState import )
describe("test for input field state", () => {
  let mockSetCurrentGuess;
  let wrapper;
  beforeEach(() => {
    // write the repeated code here
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    wrapper = setup({ success: false });
  });
  test("state updates with value of input box upon change", () => {
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon the submit button click", () => {
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, "submit-btn");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
