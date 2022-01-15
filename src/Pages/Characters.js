import React, { useEffect, useState, useContext } from "react";
import md5 from "js-md5";
import { MarvelService } from "../services/MarvelService";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const ts = Number(new Date());
    const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
    const hash = md5.create();
    hash.update(
      ts +
        process.env.REACT_APP_MARVEL_API_KEY +
        process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
    );
    const hashManual = "a903d8d17499132dd7616e950f7f6298"
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&orderBy=name&apikey=${apiKey}&hash=${hashManual}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(hash);
    setCharacters(characters);
  }

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};

export default Characters;
