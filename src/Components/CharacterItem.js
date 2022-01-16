import React from "react";
import CharacterItemBack from "./CharacterItemBack";

const CharacterItem = ({ item }) => {
  const favorite = (item) => {
    var previousData = JSON.parse(localStorage.getItem("favorites"));
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  return (
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <h1>{item.name}</h1>
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt={item.name}
          />
          <br></br>
          <button type="button" onClick={() => favorite(item)}>
            Add to Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
