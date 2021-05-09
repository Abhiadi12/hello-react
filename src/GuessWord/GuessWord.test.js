import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../testHelpers/util";
import GuessWord from "./GuessWord";

/**
 * Factory function to create a ShallowWrapper for the GuessWord component .
 * @function setup
 * @params {guessWords}
 * @returs {ShallowWrapper}
 */

const defaultProps = {
  guessWords: [
    { enterWord: "Lucky", totalCharacterMatches: 3 },
    { enterWord: "Happy", totalCharacterMatches: 4 },
  ],
};

const setup = (props = null) => {
  const setUpProps = props ? props : defaultProps;
  //console.log(setUpProps);
  return shallow(<GuessWord {...setUpProps} />);
};

// test("Render GuessWord component without any error", () => {
//   const wrapper = setup();
//   expect(wrapper.exists()).toBe(true);
// });

// use describe when you have to combine multiple tests to a section

describe("if there are no words guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords: [] });
  });
  test("component render without error", () => {
    // const wrapper = setup({ guessWords: [] }); NOTE: use callback
    const component = findByTestAttr(wrapper, "component-guessword");
    expect(component.length).toBe(1);
  });

  test("There must be the render instruction", () => {
    // const wrapper = setup({ guessWords: [] }); NOTE: use callback
    const instructions = findByTestAttr(wrapper, "guess-instruction");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessWords = [
    { enterWord: "train", totalCharacterMatches: "3" },
    { enterWord: "bullet", totalCharacterMatches: "4" },
    { enterWord: "party", totalCharacterMatches: "3" },
  ];
  beforeEach(() => {
    wrapper = setup({ guessWords });
  });
  test("component render without error", () => {
    // const wrapper = setup({ guessWords: [] }); NOTE: use callback
    const component = findByTestAttr(wrapper, "component-guessword");
    expect(component.length).toBe(1);
  });
  test("render a table with 'guesswords' details", () => {
    const guessWordsNode = findByTestAttr(wrapper, "guess-words");
    expect(guessWordsNode.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const guessWordsNode = findByTestAttr(wrapper, "guess-word");
    expect(guessWordsNode.length).toBe(guessWords.length);
  });
});
