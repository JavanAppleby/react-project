import { React, useState, useEffect } from "react";
import "../App.css";
import Search from "../Components/Search Box/SearchBar";
import axios from "axios";
import md5 from "js-md5";
import CharacterTable from "../Components/Character/CharacterTable";
import CharacterCard from "../Components/Character/CharacterCard";
import "../Components/Character/Character.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Reset } from "../Components/Character/ResetTeam";
import { Team } from "../Components/Character/ExtraordinaryTeam";
import Footer from "./Footer";

function Character() {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetch = async () => {
      const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
      const privateApiKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;
      const ts = Date.now();
      const hash = md5.create();
      hash.update(ts + privateApiKey + apiKey);
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setItems(response.data.data.results);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setItems([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetch();
    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [query]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Characters</h1>
      <Search search={(q) => setQuery(q)}></Search>
      <Reset />
      <Team />
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default Character;
