import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h1>
          {'Cerebro is making contact with "' + this.props.searchTerm + '".'}
        </h1>
      </div>
    );
  }
}
export default Loading;
