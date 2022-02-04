import { React, useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <form className="search-bar">
      <input
        className="search-bar__field"
        type="text"
        placeholder="e.g. Gambit"
        autoFocus
        onChange={(e) => onSearch(e.target.value)}
        value={text}
      />
    </form>
  );
};

export default Search;
