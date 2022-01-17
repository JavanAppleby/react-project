import { useState, Component } from "react";
import axios from "axios";
import SearchBar from "../Components/Search Box/SearchBar";
import md5 from "js-md5";
import CharacterTable from "../Components/Character/CharacterTable";
import CharacterItem from "../Components/Character/CharacterItem";
import App from "../App";
import React from "react";
import Loading from "../Components/Search Box/Loading";
import Error from "../Components/API/Error";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCharacter: "",
      results: [],
      selectedResult: null,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  render() {
    const searchResults = this.state.hasError ? (
      <Error />
    ) : this.state.isLoading ? (
      <Loading searchCharacter={this.state.searchCharacter} />
    ) : (
      <CharacterTable
        results={this.state.results}
        searchCharacter={this.state.searchCharacter}
      />
    );

    const searchDetails = this.state.selectedResult ? (
      <CharacterItem
        image={
          this.state.selectedResult.thumbnail.path +
          "." +
          this.state.selectedResult.thumbnail.extension
        }
        title={this.state.selectedResult.name}
        description={this.state.selectedResult.description}
        stories={this.state.selectedResult.stories}
        urls={this.state.selectedResult.urls}
        onClose={() => this.setState({ selectedResult: null })}
      />
    ) : (
      ""
    );

    return (
      <div className="character-results">
        <h1>Characters</h1>
        <SearchBar
          searchCharacter={this.state.searchCharacter}
          onSubmit={(searchCharacter) => this.setState({ searchCharacter })}
        />
        {searchResults}
        {searchDetails}
      </div>
    );
  }

  componentDidUpdate(_, prevState) {
    const searchCharacter = this.state.searchCharacter;
    const prevSearchCharacter = prevState.searchCharacter;

    if (searchCharacter && searchCharacter !== prevSearchCharacter) {
      this.fetchCharacter();
    }
  }

  fetchCharacter = () => {
    const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
    const privateApiKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;
    const ts = Date.now();
    const hash = md5.create();
    hash.update(ts + privateApiKey + apiKey);

    const getCharacter = async () => {
      const result = await axios(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.state.searchCharacter}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
      );
      this.setState({ results: result.data.data.results });
    };
    getCharacter();
  };
}

export default Characters;
