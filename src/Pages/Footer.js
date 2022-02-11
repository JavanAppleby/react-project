import { React, useState, useContext } from "react";
import { ThemeContext, themes } from "../Contexts/ThemeContext";

function Footer() {
  const [themeset, setThemeset] = useState(false);

  const toggleTheme = () => {
    themeset === "shield" ? setThemeset(true) : setThemeset(false);
  };

  return (
    <footer>
      <div>
        <div>
          <h6>Current Allegiance: </h6>
        </div>
        <strong className="attribution">
          Data provided by Marvel. © 2014 Marvel
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
