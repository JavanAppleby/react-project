import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
      <section className="welcome">
        <span className="speech">
          <img
            src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/5bf0b1b3-77fe-4ee0-95ce-cb027e303454/c4353f37-2836-43ce-a723-170ee6c55ef4/1280x720/match/image.jpg"
            alt="captain america"
          ></img>
          <div className="speech-bubbleL">
            <h3>Greetings!</h3>
          </div>
        </span>
        <br></br>
        <span className="speech">
          <div className="speech-bubbleR">
            <p>
              Welcome to the <strong>EXTRAORDINARY TEAM CHALLENGE</strong>{" "}
              presented to you by{" "}
              <a href="https://github.com/JavanAppleby">Javan Appleby</a>
            </p>
          </div>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_mas_mob_03.jpg"
            alt="thor"
          ></img>
        </span>
        <br></br>
        <span className="speech">
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/_tony_card_1.jpg"
            alt="iron man"
          ></img>
          <div className="speech-bubbleL">
            <p>
              To get started, head over to the{" "}
              <a href="http://localhost:3000/about">About</a> page and learn how
              to make the most noteworthy <strong>EXTRAORDINARY TEAM!</strong>
            </p>
          </div>
        </span>
        <br></br>
        <span className="speech">
          <div className="speech-bubbleR">
            <p>
              Before you go... here is Javan's{" "}
              <strong>EXTRAORDINARY TEAM</strong> submission
            </p>
          </div>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/_hulk_card_1.jpg"
            alt="hulk"
          ></img>
        </span>
      </section>
    </div>
  );
}

export default Home;
