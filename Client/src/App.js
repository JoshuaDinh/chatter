import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Login from "./pages/login/Login";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/messenger">
          <Navigation />
          <Messenger />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
