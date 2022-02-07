import { createContext } from "react";

const themes = {
  shield: {
    foreground: "#ffffff",
    background: "#70d2e6",
  },
  hydra: {
    foreground: "#ffffff",
    background: "#ab2745",
  },
};

const ThemeContext = createContext(themes.shield);

export { ThemeContext, themes };
