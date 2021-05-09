import successReducer from "./successReducer";
import { actionTypes } from "../actions/index";
test("Handle unkown action type", () => {
  expect(successReducer(false, { type: "CORRECT" })).toBe(false);
});

test("Handle CORRECT_GUESS TYPE", () => {
  expect(successReducer(true, { type: actionTypes.CORRECT_GUESS })).toBe(true);
});
