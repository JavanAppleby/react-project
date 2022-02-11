import React from "react";
import "../App.css";

function About() {
  function handleSubmit(uname) {
    let username = sessionStorage.getItem("Username") || "";
    username.push(uname.value);
    sessionStorage.setItem("Username");
  }
  const uname = document.getElementById("uname");

  return (
    <div>
      <h1>About</h1>
      <br></br>
      <form onSubmit={() => handleSubmit(uname)}>
        <label htmlFor="uname">Username:</label>
        <input type="text" id="uname" name="uname" required={true} />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default About;
