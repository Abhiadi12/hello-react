import successReducer from "./reducers/successReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  success: successReducer,
});

export default rootReducer;
