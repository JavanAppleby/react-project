import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3 className="myApp">Extraordinary Team Challenge</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/characters">
          <li>Characters</li>
        </Link>
        <Link to="/leaderboard">
          <li>Leaderboard</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
