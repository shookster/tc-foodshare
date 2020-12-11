import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Views/home';


function App() {
  return (
      <div>
        <Router>
        <div>
          <div className="container">
          </div>
          <Switch>
            <Route exact path = "/">
            <Home /> 
              {/* Route path to Search Page */}
             </Route>
             <Route path= "/">
               
               {/* route to home page */}
               </Route>
               <Route path="/">
                 {/* Route path to Login Page */}
               </Route>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;