import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearch, setPageNumber }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setPageNumber(1);
        }}
        type="text"
        placeholder="Search Characters"
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
