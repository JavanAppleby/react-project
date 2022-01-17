import React, { Component } from "react";

export class CharacterCard extends Component {
  render() {
    return (
      <button className="character-card" onClick={this.props.onClick}>
        <figure className="character-card__image">
          <img src={this.props.image} alt={this.props.title} />
        </figure>
        <div className="character-card__info">
          <h2>{this.props.title}</h2>
        </div>
      </button>
    );
  }
}
export default CharacterCard;
