import React, { Component } from "react";

class ListItem extends Component {
  async componentDidMount() {
    const apiUrl = "http(s)://gateway.marvel.com/";
    const apiKey = "&apikey=99bd6fdc7f43aa8df9a26fabd645e5ee";
    const apiFullUrl = `${apiUrl}v1/public/characters?${apiKey}`;

    try {
      const response = await fetch(apiFullUrl);
      const data = await response.json();
      console.log(data)
    //   return data;
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const metaData = this.props.data;
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
}

export default ListItem;
