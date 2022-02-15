import React from "react";
import "../App.css";

function About() {
  function handleSubmit({ target }) {
    let username = sessionStorage.getItem("Username") || "";
    username = target.uname.value;
    sessionStorage.setItem("Username", username);
  }

  return (
    <div>
      <h1>About</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">Username:</label>
        <input type="text" id="uname" name="uname" required={true} />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default About;
