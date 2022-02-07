import { React, useContext, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

const link = {
  width: "fit-content",
  padding: "1rem",
  margin: "auto",
  background: "white",
  textDecoration: "none",
  color: "#ec1d23",
};

function Nav() {
  const theme = useContext(ThemeContext);

  return (
    <nav style={theme}>
      <h3 className="myApp">Extraordinary Team Challenge</h3>
      <ul className="nav-links">
        <NavLink to="/" exact style={link}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" exact style={link}>
          <li>About</li>
        </NavLink>
        <NavLink to="/characters" exact style={link}>
          <li>Characters</li>
        </NavLink>
        <NavLink to="/leaderboard" exact style={link}>
          <li>Leaderboard</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
