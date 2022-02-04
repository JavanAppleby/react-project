import React from "react";

const CharacterItem = ({ item }) => {
  const add = (item) => {
    // getting the previous element and adding the new favorite item
    let previousData = JSON.parse(localStorage.getItem("Extraordinary Team"));
    previousData.push(item);
    localStorage.setItem("Extraordinary Team", JSON.stringify(previousData));
    console.log(localStorage);
    console.log(previousData);
  };

  const urlSet = () => {
    const urlElem = item.urls;
    let urlList = "";
    let i = 0;
    while (i < urlElem.length) {
      urlList +=
        `${urlElem[i].type.charAt(0).toUpperCase()}${urlElem[i].type.slice(
          1
        )}: ` +
        `<a href=${urlElem[i].url} alt=${urlElem[i].type} />` +
        " ";
      i++;
    }
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
          <p className="urls">{this.urlSet().value.toString}</p>
          <button className="view-card" value={item.id}>
            View Character Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
