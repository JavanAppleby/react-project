import React from "react";

const CharacterItemBack = ({item}) => {

const favorite = (item)=>{
  var previousData = JSON.parse(localStorage.getItem('favorites'))
  previousData.push(item)
  localStorage.setItem('favorites',JSON.stringify(previousData))
  };

  return (
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <img src={item.thumbnail.path + "/portrait_small.jpg"} alt={item.name} />
        </div>
        <div className="content-back">
          <h1>{item.name}</h1>
          <div className="short-detail">
            <strong>Name:</strong> {item.name}
            <br></br>
            <strong>Description:</strong> {item.description}
            <br></br>
            <strong>Comic Appearances:</strong> {item.comics.available}
            <br></br>
            <strong>Stories:</strong> {item.stories.available}
            <br></br>
            <strong>Events:</strong> {item.events.available}
            <br></br>
            <strong>Series:</strong> {item.series.available}
            <br></br>
            <button type="button" onClick={()=>favorite(item)}>
              Add to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterItemBack;