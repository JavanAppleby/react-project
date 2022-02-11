import { React, useState } from "react";

const CharacterItem = ({ item }) => {
  const [team, setTeam] = useState([]);

  const add = (character) => {
    let previousData =
      JSON.parse(sessionStorage.getItem("Extraordinary Team")) || [];
    if (previousData.length < 6) {
      previousData.push(character);
      setTeam(previousData);
      sessionStorage.setItem(
        "Extraordinary Team",
        JSON.stringify(previousData)
      );
    } else
      alert(
        "Your team is full. To make a change, click Reset Team to start over, or hit Submit to finalise your Extraordinary Team!"
      );
  };

  const urlSet = () => {
    const urlElem = item.urls;
    return urlElem.map((urlElem) => (
      <div>
        <a href={urlElem.url} alt={urlElem.type}>
          {urlElem.type}
        </a>
      </div>
    ));
  };

  return (
    <div className="character-card">
      <br></br>
      <button className="add" type="button" onClick={() => add(item)}>
        Add to Team
      </button>
      <div className="character-card__frame">
        <div className="character-card">
          <h2>{item.name}</h2>
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt={item.name}
          />
          {/* <div className="character-info">
            <p>#{item.id}</p>
            <h4>Appearances:</h4>
            <p>
              Comics: {item.comics.available}
              <br></br>
              Series: {item.series.available} <br></br>
              Events: {item.events.available} <br></br>
              Stories: {item.stories.available} <br></br>
            </p>
            <h4>Description</h4>
            <p className="description">{item.description}</p>
          </div>
          <br></br>
          <p className="urls">{urlSet()}</p> */}
          <button className="view-card" value={item.id}>
            View Character Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
