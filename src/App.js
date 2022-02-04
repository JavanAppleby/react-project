import "./App.css";
import React from "react";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Characters from "./Pages/Characters";
import Leaderboard from "./Pages/Leaderboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeContext, theme } from "./Contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContext.Provider value={theme.shield}>
          <Nav />
        </ThemeContext.Provider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
