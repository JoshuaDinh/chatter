import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
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
      <Switch>
        <Route path="/messenger">
          <Navigation />
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
