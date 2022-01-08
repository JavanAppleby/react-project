import React, { Component } from "react";
import ListItem from "./SuperheroListItem";

class List extends Component {

  render() {
    return (
      <div>
        {this.props.result.map((data, index) => (
          <ListItem
            superhero={data}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default List;
