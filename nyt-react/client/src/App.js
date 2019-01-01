import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import './App.css';


const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Saved} />
    </div>
  </Router>;

export default App;