import React from 'react';
import Header from './Header';
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
       <Switch>
         <Route path="/login">
            <h1> I am the login page</h1>
         </Route>
         <Route path="/profile">
            <h1> I am the profile page</h1>
         </Route>
         <Route path="/">
            <TinderCards />
         </Route>
    </Switch>
     </Router>
    </div>
  );
}

export default App;
