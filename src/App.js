import React, { Component } from "react";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Leaderboard from "./Pages/Leaderboard";
import Characters from "./Pages/Characters";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/characters" exact component={Characters} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
