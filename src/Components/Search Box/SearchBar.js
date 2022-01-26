import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCharacter: props.searchCharacter,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          className="search-bar__field"
          type="text"
          value={this.state.searchCharacter}
          placeholder="e.g. Gambit"
          onChange={(e) => this.setState({ searchCharacter: e.target.value })}
        />
        <button className="search-bar__submit" type="submit">
          Initiate Search
        </button>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchCharacter);
  }
}
export default SearchBar;
