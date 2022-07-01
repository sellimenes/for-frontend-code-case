import React from "react";
import { useState, useEffect } from "react";
import {Helmet} from 'react-helmet'
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

  console.log(fetchedData);

  return (
    <>
      <Helmet>
        <title>For Frontend Code Case - Selim</title>
      </Helmet>
      <div>
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
      </div>
    </>
  );
};

export default Home;
