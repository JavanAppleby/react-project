import React, { Component } from "react";

export class NoResults extends Component {
  render() {
    const msg = this.props.searchCharacter
      ? 'Unfortunately, Cerebro cannot locate "' +
        this.props.searchCharacter +
        '". It appears as if Cerebro is in need of maintenance, unless you would like to try again?'
      : "Cerebro is online and waiting for input";

    return (
      <div className="no-results">
        <h1>{msg}</h1>
      </div>
    );
  }
}
export default NoResults;
