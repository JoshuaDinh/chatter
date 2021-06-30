import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";

const App = () => {
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
