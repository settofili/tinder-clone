import React from 'react';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     
     <Router>
       <Header />
       <Switch>
         <Route path="/chat">
            <h1> No new notifications!</h1>
         </Route>
         <Route path="/profile">

            <img 
                className="dashboard__image"
                src="https://i.imgur.com/QwYiX5q.png" alt=""/>

         </Route>
         <Route path="/">
            <TinderCards />
            <SwipeButtons />
         </Route>
    </Switch>
     </Router>
    </div>
  );
}

export default App;
