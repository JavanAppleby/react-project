import React from "react";

const CharacterItem = ({ item }) => {
  const add = (id) => {
    let previousData =
      JSON.parse(localStorage.getItem("Extraordinary Team")) || [];
    previousData.push(id);
    localStorage.setItem("Extraordinary Team", JSON.stringify(previousData));
    console.log(localStorage);
    console.log(previousData);
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
      <div className="card-header">
        <h2>{item.name}</h2>
        <br></br>
        <button className="add" type="button" onClick={() => add(item)}>
          Add to Team
        </button>
      </div>
      <div className="character-card__frame">
        <div className="character-card">
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
          <div className="character-info">
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
          <p className="urls">{urlSet()}</p>
          <button className="view-card" value={item.id}>
            View Character Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
