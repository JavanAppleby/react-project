import { createContext } from "react";

const theme = {
  shield: {
    foreground: "#70d2e6",
    background: "#70d2e6",
  },
  hydra: {
    foreground: "#ab2745",
    background: "#ab2745",
  },
};

const ThemeContext = createContext(theme.shield);

export { ThemeContext, theme };
