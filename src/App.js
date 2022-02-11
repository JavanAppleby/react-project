import "./App.css";
import React from "react";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Characters from "./Pages/Characters";
import Leaderboard from "./Pages/Leaderboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Pages/Footer";
import { ThemeContext, themes } from "./Contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [themeset, setThemeset] = useState("shield");

  const toggleTheme = () => {
    themeset === "shield" ? setThemeset("hydra") : setThemeset("shield");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContext.Provider value={themes.shield}>
          <Nav />
          <br></br>
          <br></br>
          <br></br>
        </ThemeContext.Provider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </Switch>
        <ThemeContext.Provider value={themes.shield}>
          <Footer />
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
