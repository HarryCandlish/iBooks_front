import { combineReducers } from "redux";
import bookReducer from "./bookReducer.js";

export default combineReducers({
  books: bookReducer
});
