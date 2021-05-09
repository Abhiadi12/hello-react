import { createStore } from "redux";
import rootReducer from "../rootReducer";

/**
 * Create a testing store with imported reduces, middleware and initial state .
 * global: rootReducer
 * @param {object} initialState
 * @function storeFactory
 * @returns {Store} - Redux store
 * */

export const storeFactory = (initialState) => {
  console.log(initialState);
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);
