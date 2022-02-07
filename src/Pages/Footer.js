import { React, useState, useContext } from "react";
import { ThemeContext, themes } from "../Contexts/ThemeContext";

function Footer() {
  const [themeset, setThemeset] = useState(false);

  const toggleTheme = () => {
    themeset === "shield" ? setThemeset(true) : setThemeset(false);
  };

  return (
    <div className="footer">
      <strong className="attribution">
        Data provided by Marvel. © 2014 Marvel
      </strong>
      <div>
        <h6>Current Allegiance: </h6>
      </div>
    </div>
  );
}

export default Footer;
