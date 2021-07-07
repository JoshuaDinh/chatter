import { combineReducers } from "redux";
import alert from "./alert";
import registerForm from "./registerForm";
import termsOfService from "./termsOfService";
import auth from "./auth";

export default combineReducers({
  alert,
  registerForm,
  termsOfService,
  auth,
});
