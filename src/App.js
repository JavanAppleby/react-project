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
    // const { thumbnail } = superhero.data.results[0];
    // console.log({ thumbnail });
    return <List result={this.state.selected} />;
  }

  // handleSelection(index) {
  //   this.setState({
  //     selected: this.state.selected.concat(index),
  //   })
  // }
}

export default App;
