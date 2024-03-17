import { combineReducers } from "@reduxjs/toolkit";
import userInfoReducer from "./Slice/userInfo";
import displayComponentReducer from "./Slice/displayComponent";
import resumeContentReducer from "./Slice/resumeContent";
import componentModalReducer from "./Slice/componentModal";

const rootReducer = combineReducers({
  userDetails: userInfoReducer,
  resumeContent: resumeContentReducer,
  showComponent: displayComponentReducer,
  modal: componentModalReducer,
});

export default rootReducer;
