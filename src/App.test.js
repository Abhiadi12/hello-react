import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";
import { findByTestAttr, storeFactory } from "./testHelpers/util";
import { Provider } from "react-redux";
// active global mock to make sure that getSecreatWord does't make network call
jest.mock("./actions");
import { getSecreatWord as mockGetSecreatWord } from "./actions";

/**
 * Factory function to create a ShallowWrapper for the App component .
 * @function setup
 * @returs {ShallowWrapper}
 */

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
// use mount because useEffect not call with shallow

test("renders App Component Without Fail ", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const wrapper = setup();
  //console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
  // you can get some specific nodes by adding a selectpr to the exists
});

test("Must have link component ", () => {
  const wrapper = setup();
  expect(wrapper.find(".App-link").exists()).toBe(true);
});

// A test for learning purpose
test("Render a increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

// for increament option
describe("Increment operation", () => {
  test("Increanet the initial value", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");

    const count = findByTestAttr(wrapper, "counter-value").text();
    expect(count).toBe("1");
  });

  // test("There must be no error message", () => {
  //   const wrapper = setup();
  //   expect(wrapper.find(".message").exists()).toBe(false);
  // });
});

describe("Decreament operation", () => {
  test("render the decreament button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decreament-button");
    expect(button.length).toBe(1);
  });

  test("display the decreament state", () => {
    const wrapper = setup();
    const decButton = findByTestAttr(wrapper, "decreament-button");
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");
    decButton.simulate("click");
    const count = findByTestAttr(wrapper, "counter-value").text();
    expect(count).toBe("0");
  });

  test("error when counter goes less than 0", () => {
    const wrapper = setup();
    const decButton = findByTestAttr(wrapper, "decreament-button");
    decButton.simulate("click");

    expect(wrapper.find(".message").exists()).toBe(true);
  });
});

// for getSecreatWord
describe("get secreat word", () => {
  beforeEach(() => {
    mockGetSecreatWord.mockClear();
  });
  test("get secreat word on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecreatWord).toHaveBeenCalledTimes(1);
  });
  test("getsecreatword not run when the state update", () => {
    const wrapper = setup();
    mockGetSecreatWord.mockClear();
    wrapper.setProps();
    // using setProps because wrapper.update() does't trigger useEffect
    // https://github.com/enzymejs/enzymee/issues/2254
    expect(mockGetSecreatWord).toHaveBeenCalledTimes(0);
  });
});
