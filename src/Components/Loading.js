import React, { Component } from 'react';

export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h1>{ 'Sigining into Cerebro... looking up "' + this.props.searchTerm + '".' }</h1>
      </div>
    );
  }
}
export default Loading;