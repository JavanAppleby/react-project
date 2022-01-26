import React, { Component } from "react";
import { CharacterCard } from "./CharacterCard";
import NoResults from "../Search Box/NoResults";
import "./Character.css";

export class CharacterTable extends Component {
  render() {
    const searchResults = this.props.results.length ? (
      this.props.results.map((result) => {
        return (
          <CharacterCard
            key={result.id}
            image={result.thumbnail.path + "." + result.thumbnail.extension}
            title={result.name}
            comicAppearances={result.comics.available}
            events={result.events.available}
            series={result.series.available}
            stories={result.stories.available}
            wiki={result.urls[1].url}
            onClick={() => this.props.onResultClick(result.id)}
          />
        );
      })
    ) : (
      <NoResults searchCharacter={this.props.searchCharacter} />
    );
    return <section className="character-table">{searchResults}</section>;
  }
}

export default CharacterTable;
