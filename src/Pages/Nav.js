import { React, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
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
  console.log("THEME CONTEXT:", theme);

  return (
    <nav>
      <h3 className="myApp">Extraordinary Team Challenge</h3>
      <ul className="nav-links">
        <Link to="/" exact style={link}>
          <li>Home</li>
        </Link>
        <Link to="/about" exact style={link}>
          <li>About</li>
        </Link>
        <Link to="/characters" exact style={link}>
          <li>Characters</li>
        </Link>
        <Link to="/leaderboard" exact style={link}>
          <li>Leaderboard</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
