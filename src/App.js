import React from "react";
import "./App.css"
import BasicKeys from './components/BasicKeys'
import BasicTones from './components/Home'
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
                <div className="menu-link"><Link to="/module3">Module 3: Recording Melodies</Link></div>
              </li>
              <li>
                <div className="menu-link"><Link to="/module4">Module 4: Percussion</Link></div>
              </li>
              <li>
                <div className="menu-link"><Link to="/module5">Module 5</Link></div>
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
        </Switch>
      </div>
    </Router>
  );

}

