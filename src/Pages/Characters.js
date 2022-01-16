import React, { useEffect, useState, useContext } from "react";
import md5 from "js-md5";
import axios from "axios";
import Search from "../Components/Search";
import CharacterTable from "../Components/CharacterTable";
import App from "../App.css";

const Characters = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  const privateApiKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;
  const ts = Date.now();
  const hash = md5.create();
  hash.update(ts + privateApiKey + apiKey);

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        if (
          localStorage.getItem("favorites") === "[]" ||
          !localStorage.getItem("favorites")
        ) {
          localStorage.setItem("favorites", "[]");
          const result = await axios(
            `https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&apikey=${apiKey}&hash=${hash}`
          );
          console.log(result.data.data.results);
          setItems(result.data.data.results);
          setLoading(false);
        } else {
          let favorite = JSON.parse(localStorage.getItem("favorites"));
          setItems(favorite);
          setLoading(false);
        }
      } else {
        const result = await axios(
          `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${apiKey}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };
    fetch();
  }, [query]);

  const resetTeam = localStorage.clear();

  console.log(localStorage);

  return (
    <div className="Characters">
      <span>
        <h1>Characters</h1>
        <div className="reset">
          <p className="favourites">Current Team: {localStorage.team}</p>
          <button onClick={resetTeam}>Reset Team</button>
        </div>
      </span>
      <Search search={(q)=>setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
};

export default Characters;
