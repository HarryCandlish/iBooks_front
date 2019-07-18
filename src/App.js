import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
