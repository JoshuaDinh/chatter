import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./pages/Messenger/Messenger";
import Home from "./pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/messenger">
          <Messenger />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
