import { React, useState } from "react";

export function Reset() {
  const [team, setTeam] = useState([]);
  const reset = () => {
    sessionStorage.clear();
  };

  return (
    <div className="reset">
      {sessionStorage.length > 0 ? (
        <div>
          <button
            className="reset"
            type="button"
            onClick={() => setTeam(reset())}
          >
            Reset my Team
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
