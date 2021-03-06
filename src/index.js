import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Here we render the App component, passing the Marvel API key as property.
// Since our application does not have access to environment variables at
// runtime, the API key must be read in and exposed from within this file.
ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);
