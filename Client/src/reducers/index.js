import { combineReducers } from "redux";
import alert from "./alert";
import registerForm from "./registerForm";
import termsOfService from "./termsOfService";

export default combineReducers({
  alert,
  registerForm,
  termsOfService,
});
