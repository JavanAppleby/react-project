import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <section className="welcome">
        <h3>Greetings!</h3>
        <p>
          Welcome to the <strong>EXTRAORDINARY TEAM CHALLENGE</strong> presented
          to you by <a href="https://github.com/JavanAppleby">Javan Appleby</a>
        </p>
        <br></br>
        <p>
          To get started, head over to the{" "}
          <a href="http://localhost:3000/about">About</a> page and learn how to
          make the most noteworthy <strong>EXTRAORDINARY TEAM!</strong>
        </p>
        <br></br>
        <p>
          Before you go... here is Javan's <strong>EXTRAORDINARY TEAM</strong>{" "}
          submission
        </p>
      </section>
    </div>
  );
}

export default Home;
