import { actionTypes } from "../actions/index";
const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS: {
      return true;
    }
    default:
      return false;
  }
};

export default successReducer;
// write the test for reducers
