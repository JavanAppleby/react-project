import React from "react";
import { Remove } from "./RemoveCharacter";

export function Team() {
  const buildTeam = () => {
    const item = JSON.parse(sessionStorage.getItem("Extraordinary Team")) || [];
    return item.map((item) => (
      <div className="team-container">
        <div className="character-card">
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt={item.name}
          />
          <br></br>
          <h2>{item.name}</h2>
          {/* <Remove /> */}
        </div>
      </div>
    ));
  };
  return (
    <>
      <h2>My Extraordinary Team</h2>
      <div className="exraordinary-team">
        {sessionStorage.length > 0 ? buildTeam() : <div></div>}
      </div>
    </>
  );
}
