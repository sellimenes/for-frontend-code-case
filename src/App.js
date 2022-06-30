import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Pagination from './Components/Pagination'
import SearchBar from "./Components/SearchBar";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const[fetchedData, setFetchedData] = useState([]);
  const[search, setSearch] = useState("");
  const {info, results} = fetchedData;

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
      <SearchBar setSearch={setSearch} setPageNumber={setPageNumber}/>
      <Cards results={results} />
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </>
  );
}

export default App;
