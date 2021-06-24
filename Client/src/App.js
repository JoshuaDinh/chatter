import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/messenger">
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
