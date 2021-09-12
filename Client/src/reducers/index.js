import { combineReducers } from "redux";
import alert from "./alert";
import registerForm from "./registerForm";
import auth from "./auth";
import conversations from "./conversations";
import currentChat from "./currentChat";
import toggleSearch from "./toggleSearch";
import toggleTermsOfService from "./toggleTermsOfService";

export default combineReducers({
  alert,
  registerForm,
  auth,
  conversations,
  currentChat,
  toggleSearch,
  toggleTermsOfService,
});
