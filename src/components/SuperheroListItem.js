import React, { Component } from "react";

class ListItem extends Component {
//   constructor(props) {
//     super(props);
//     // this.handleClick = this.handleClick.bind(this);
//     // this.state = {
//     //   selected: false,
//     // };
//   }

  render() {
    const metaData = this.props.superhero;
    const { thumbnail, comics, series, stories, events, urls } = metaData;

    return (
      <div className="superhero">
        <div className="superhero-description-container">
          {metaData.description}
        </div>
        <div className="superhero-thumbnail-container">
          <img
            className="superhero-thumbnail"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            href={metaData.name}
          />
        </div>
        <div className="superhero-data-container">
          <h1>{metaData.superhero.name}</h1>

          <p>Comic Appearances: {comics.available}</p>

          <div className="comic-appearance-container">
            {comics.map(function (comicTitle, comicIdx) {
              return <li key={comicIdx}>{comicTitle.name}</li>;
            })}
          </div>

          <p>Series Appearances: {series.available}</p>

          <div className="series-appearance-container">
            {series.map(function (seriesTitle, seriesIdx) {
              return <li key={seriesIdx}>{seriesTitle.name}</li>;
            })}
          </div>

          <p>Stories Appearances: {stories.available}</p>

          <div className="stories-appearance-container">
            {stories.map(function (storiesTitle, storiesIdx) {
              return <li key={storiesIdx}>{storiesTitle.name}</li>;
            })}
          </div>

          <p>Events Appearances: {events.available}</p>

          <div className="events-appearance-container">
            {events.map(function (eventsTitle, eventsIdx) {
              return <li key={eventsIdx}>{eventsTitle.name}</li>;
            })}
          </div>

          <div className="url-container">
            {urls.map(function (urlType, urlString, urlIdx) {
              return (
                <li key={urlIdx}>
                  {urlType.type} {urlString.url}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

//   handleClick() {
//     if (this.props.onSelect) {
//       this.props.onSelect(this.props.key);
//     }
//     this.setState({
//       selected: !this.state.selected,
//     });
//   }
}

export default ListItem;
