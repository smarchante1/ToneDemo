import React from "react";
import BasicKeys from './components/BasicKeys'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/module2">Module 2</Link>
            </li>
            <li>
              <Link to="/module3">Module 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/module2">
            <BasicKeys />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

