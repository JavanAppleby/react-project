import { React, useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer style={theme}>
      <strong className="attribution">
        Data provided by Marvel. © 2014 Marvel
      </strong>
      <h6>Current Allegiance: </h6>
    </footer>
  );
}

export default Footer;
