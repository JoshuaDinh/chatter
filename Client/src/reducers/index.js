import { combineReducers } from "redux";
import alert from "./alert";
import registerForm from "./registerForm";

export default combineReducers({
  alert,
  registerForm,
});
