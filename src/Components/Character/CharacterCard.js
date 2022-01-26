import React, { Component } from "react";
import "./Character.css";
import { useState } from "react";

export class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  createTeam() {
    const [team, setTeam] = (useState = []);

    if (team === "") {
      const xTeam = JSON.parse(localStorage.getItem("add"));
      setTeam(xTeam);
    }
  }

  render() {
    return (
      <div className="character-card">
        <div className="character-card__frame">
          <figure className="character-card__image">
            <img src={this.props.image} alt={this.props.title} />
          </figure>
          <div className="character-card__info">
            <h2>{this.props.title}</h2>
            <div className="character-info">
              <p>Comics: {this.props.comicAppearances}</p>
              <p>Events: {this.props.events}</p>
              <p>Series: {this.props.series}</p>
              <p>Stories: {this.props.stories}</p>
            </div>
            <div className="character-urls">
              <a href={this.props.wiki}>Wiki</a>
            </div>
          </div>
        </div>
        <button className="add" onClick={this.createTeam()}>
          Add to EXTRAORDINARY TEAM
        </button>
      </div>
    );
  }
}
export default CharacterCard;
