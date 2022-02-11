import { React, useState } from "react";
import { Remove } from "./RemoveCharacter";

export function Team() {
  const [newTeam, setNewTeam] = useState([]);
  const addTeam = () => {
    let teamToSubmit =
      JSON.parse(sessionStorage.getItem("Extraordinary Team")) || [];
    let leaderboard =
      JSON.parse(localStorage.getItem("Extraordinary Team")) || [];
    if (teamToSubmit.length < 6) {
      alert("Not enough characters! You need 6 characters to submit a team");
    } else leaderboard.push(teamToSubmit);
    setNewTeam(leaderboard);
    localStorage.setItem("Extraordinary Team", JSON.stringify(leaderboard));
  };

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
        {sessionStorage.length > 0 ? (
          buildTeam()
        ) : (
          <div>Search for characters to add to your team</div>
        )}
        <button className="submit-team" onClick={(e) => addTeam()}>
          Submit Team
        </button>
      </div>
    </>
  );
}
