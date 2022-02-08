import React from "react";

export function Remove() {
  const remove = () => {
    sessionStorage.removeItem([]);
  };

  return (
    <div className="reset">
      {sessionStorage.length > 0 ? (
        <div>
          <button className="remove" type="button" onClick={() => remove()}>
            Remove Character
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
