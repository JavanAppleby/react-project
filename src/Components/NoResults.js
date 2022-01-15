import React, { Component } from 'react';

export class NoResults extends Component {
  render() {
    const msg = this.props.searchTerm
      ? 'Error: "' + this.props.searchTerm + '" does not exist in memory. Cerebro needs a break after that wild search!'
      : 'Cerebro online and waiting for input...';

    return (
      <div className="no-results">
        <h1>{ msg }</h1>
      </div>
    );
  }
}
export default NoResults;