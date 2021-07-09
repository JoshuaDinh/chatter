import { combineReducers } from "redux";
import alert from "./alert";
import registerForm from "./registerForm";
import termsOfService from "./termsOfService";
import auth from "./auth";
import conversations from "./conversations";

export default combineReducers({
  alert,
  registerForm,
  termsOfService,
  auth,
  conversations,
});
