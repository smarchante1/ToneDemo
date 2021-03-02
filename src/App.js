import React from "react";
import "./App.css";
import BasicKeys from './components/BasicKeys';
import BasicTones from './components/Home';
import CreateSong from './components/CreateSong';
import Sandbox from './components/Sandbox';
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
          <label for="touch"><span id="menu-span">modules</span></label>               
          <input type="checkbox" id="touch" />           
            <ul className="slide">
              <li>
                <div className="menu-link"><Link to="/">Module1: Tone.js Basics</Link></div>
              </li>
              <li>
                <div className="menu-link"><Link to="/module2">Module 2: Mapping to Buttons</Link></div>
              </li>
              <li>
                <div className="menu-link"><Link to="/module3">Module 3: Creating Songs</Link></div>
              </li>
              <li>
                <div className="menu-link"><Link to="/sandbox">Code Sandbox</Link></div>
              </li>
            </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div className="main-container">
              <BasicTones />
            </div>
          </Route>
          <Route path="/module2">
            <div className="main-container">
              <BasicKeys />
            </div>
          </Route>
          <Route path="/module3">
            <div className="main-container">
              <CreateSong />
            </div>
          </Route>
          <Route path="/sandbox">
            <div className="main-container">
              <Sandbox />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

