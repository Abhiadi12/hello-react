// In functional test you must test your application based upon user perspective .
import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../testHelpers/util";
import App from "../App";
/**
 * create wrapper with specified initial condition
 * then submit a guess word train
 * @function
 * @param {object} state - Initial conditions
 * @return {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (initialState = {}) => {
  //TODO: appy state
  const wrapper = mount(<App />);

  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate submit button and add the train value
  const simulateBtn = findByTestAttr(wrapper, "submit-btn");
  simulateBtn.simulate("click", { preventDefault() {} });
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      flag: false,
      guessWords: [],
    });
  });

  test("Create guesswords table with one row", () => {
    const guessWordRows = findByTestAttr(wrapper, "guess-word");
    expect(guessWordRows).toHaveLength(1);
  });
});

describe.skip("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      flag: false,
      guessWords: [{ enterWord: "agile", letterMatchCount: 1 }],
    });
  });

  test("add some random guess", () => {
    const guessWordRows = findByTestAttr(wrapper, "guess-word");
    expect(guessWordRows).toHaveLength(2);
  });
});

describe.skip("Hurry word guesses", () => {
  // instead of direct passing the guessword we would like to add the word first then cgeck out test
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      flag: false,
      guessWords: [{ enterWord: "agile", letterMatchCount: 1 }],
    });
    // add a success guess
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    const submitBtn = findByTestAttr(wrapper, "submit-btn");
    submitBtn.simulate("click", { preventDefault() {} });
  });

  test("adds row to the guess table", () => {
    const guessWordRows = findByTestAttr(wrapper, "guess-word");
    expect(guessWordRows).toHaveLength(3);
  });

  test("display congrats component", () => {
    const congrats = findByTestAttr(wrapper, "congrats-message");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does't display the input box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);
  });
});

// skip(), todo() and only()
// todo can only be used with test level not in the describe level
