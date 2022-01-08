import React, { Component } from "react";
import ListItem from "./SuperheroListItem";

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      Dataisloaded: false
    };
    // this.handleSelection = this.handleSelection.bind(this);
  }

  async componentDidMount(){
    const apiUrl = "http(s)://gateway.marvel.com/";
    const apiKey = "&apikey=99bd6fdc7f43aa8df9a26fabd645e5ee";
    const apiFullUrl = `${apiUrl}v1/public/characters?${apiKey}`;

    try{
        const response = await fetch(apiFullUrl)
        const superhero = await response.json();
        this.setState({
          selected: superhero,
          Dataisloaded: true
        })
    }catch(err){
        console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.props.result.map((superhero, index) => (
          <ListItem
            superhero={this.state.selected}
            key={index}
            // onSelect={this.props.onSelect}
          />
        ))}
      </div>
    );
  }
}

export default List;
