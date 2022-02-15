import { createContext } from "react";

const themes = {
  shield: {
    foreground: "#ffffff",
    background: "#70d2e6",
    color: "white",
  },
  hydra: {
    foreground: "#ffffff",
    background: "#ab2745",
    color: "white",
  },
};

const ThemeContext = createContext();

export { ThemeContext, themes };
