import React, { Component } from "react";
import "./App.css";
import List from "./components/SuperheroList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  render() {
    return <List result={this.state.selected} />;
  }
}

export default App;
