import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Cards from "../Cards";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <>
      <Header />
      <SearchBar setSearch={setSearch} setPageNumber={setPageNumber} />
      {info ? (
        <Cards results={results} />
      ) : (
        <p className="noCharacter">Nothing here. 🙄</p>
      )}
      {info && (
        <Pagination
          info={info}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      )}
    </>
  );
};

export default Home;
