import React from "react";
import "../App.css";

function About() {
  //   function handleSubmit() {
  //     let username = sessionStorage.getItem("Username") || "";
  //     console.log(username);
  //     username.push(uname);
  //   }

  return (
    <div>
      <h1>About</h1>
      <br></br>
      <form>
        {/* onSubmit={handleSubmit}> */}
        <label for="uname">Username:</label>
        <input type="text" id="uname" name="uname" required="true" />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default About;
