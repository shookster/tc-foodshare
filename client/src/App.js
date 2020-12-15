import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/home";
import Map from "./Views/map";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Input from "./Views/input"

function App() {
  return (
    <div>
      <Router>
        <div>
          <div className="container"></div>
          <Switch>
            <Route exact path="/">
              <Home />
              
            </Route>
            <Route path="/map">
              {/* Route path to Search Page */}
              <Map />
            </Route>
            <Route path="/input">
              {/* Route path to Input Page */} 
              <Input/>
              </Route>
            <Route path="/">{/* Route path to Login Page */}</Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
