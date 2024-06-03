import { combineReducers } from "@reduxjs/toolkit";
import userInfoReducer from "./Slice/userInfo";
import displayComponentReducer from "./Slice/displayComponent";
import resumeContentReducer from "./Slice/resumeContent";
import componentModalReducer from "./Slice/componentModal";
import authReducer from "./Slice/auth";

const rootReducer = combineReducers({
  userDetails: userInfoReducer,
  resumeContent: resumeContentReducer,
  showComponent: displayComponentReducer,
  modal: componentModalReducer,
  authSlice: authReducer,
});

export default rootReducer;
